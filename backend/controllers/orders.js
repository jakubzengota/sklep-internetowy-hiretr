import nodemailer from "nodemailer";
import models from "../models";

const Product = models.Product;

const orderEmail = (products) => ({
    subject: "React Confirm Email",
    html: `
        <html>
            ${products.map((p) => `<div>${p.id}</div>`)}
        </html>
    `,
});

const credentials = {
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        // These environment variables will be pulled from the .env file
        user: "sklepik.nzi@gmail.com",
        pass: "reksoh-Hiztaj-retfo8",
    },
};

const transporter = nodemailer.createTransport(credentials);

const sendEmail = async (to, content) => {
    const contacts = {
        from: "sklepik.nzi@gmail.com",
        to,
    };
    const email = {
        ...content,
        ...contacts,
    };
    await transporter.sendMail(email);
};

export const placeOrder = async (req, res, next) => {
    const products = await Promise.all(
        req.body.products.map((p) => Product.findByPk(p.productId))
    );
    await sendEmail(req.body.customer.email, orderEmail(products));
    res.status(200).send();
    // res.send(req.body);
};
