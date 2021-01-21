// import { expect } from "chai";
import {
    sequelize,
    dataTypes,
    checkModelName,
    checkUniqueIndex,
    checkPropertyExists,
} from "sequelize-test-helpers";

import UserModel from "../models/user.js";

describe("UserModel", () => {
    const User = UserModel(sequelize, dataTypes);
    const user = new User();
    checkModelName(User)("User");
    context("properties", () => {
        [
            "email",
            "password",
            "facebookId",
            "firstName",
            "lastName",
            "confirmed",
        ].forEach(checkPropertyExists(user));
    });
});
