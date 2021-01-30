import chai, { expect } from "chai";
chai.use(require("sinon-chai"));
import { match, stub, resetHistory, assert, spy, useFakeTimers } from "sinon";
import proxyquire from "proxyquire";
import jwt from "jsonwebtoken";

import { makeMockModels } from "sequelize-test-helpers";

describe("signIn", () => {
    const User = { findOne: stub() };
    const mockModels = makeMockModels({ User });
    mockModels.User;
    const { signIn } = proxyquire("../controllers/user", {
        "../models": mockModels,
    });
    const email = "jeremiwielewski@wp.pl";
    
    const password = "jeremi";
    const fakeUser = {
        id: 1,
        email,
        password,
        comparePassword: stub(),
        toJSON: stub(),
    };
    const fakeRequest = {
        body: {
            email,
            password,
        },
    };
    let response;
    let clock;
    context("user does not exist", () => {
        before(async () => {
            User.findOne.resolves(undefined);
            response = {
                json: spy(),
                status: stub().returns({ json: spy() }), // to spy res.status(500).end()
            };
            await signIn(fakeRequest, response);
        });
        after(resetHistory);
        it("called User.findOne", () => {
            expect(User.findOne).to.have.been.calledWith(
                match({ where: { email } })
            );
        });
        it("got 401 status", () => {
            expect(response.status).to.have.been.calledWith(401);
        });
        it("returned error message", () => {
            expect(response.status(401).json).to.have.been.calledWith({
                success: false,
                message: "uzytkownik nie istnieje",
            });
        });
    });
    context("user exists", () => {
        before(async () => {
            clock = useFakeTimers();
            User.findOne.resolves(fakeUser);
            fakeUser.comparePassword.resolves(true);
            fakeUser.toJSON.resolves({ id: 1, email });
            response = {
                json: spy(),
                status: stub().returns({ json: spy() }),
            };
            await signIn(fakeRequest, response);
        });
        after(resetHistory);
        it("called User.findOne", () => {
            expect(User.findOne).to.have.been.calledWith(
                match({ where: { email } })
            );
        });
        it("got 200 status", () => {
            expect(response.status).to.have.been.calledWith(200);
        });
        it("returned valid JWT", () => {
            expect(response.status(200).json).to.have.been.calledWith(
                match({
                    token: jwt.sign({ id: fakeUser.id }, "bla", {
                        expiresIn: 60 * 60,
                    }),
                })
            );
        });
    });
});
