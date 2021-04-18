import nodemailer from "nodemailer";
import models from "../models";

const Product = models.Product;

const orderEmail = ({ price, customer, products, address }) => ({
    subject: "React Confirm Email",
    html: `
        <html>
            <div>cena: ${price}</div>
            <br/>
            <div>klient</div>
            <div>imie: ${customer.firstName}</div>
            <div>nazwisko: ${customer.lastName}</div>
            <div>email: ${customer.email}</div>
            <div>numer telefonu: ${customer.phone}</div>
            <br/>
            <div>adres</div>
            <div>Ulica: ${address.street}</div>
            <div>numer domu: ${address.houseNumber}</div>
            <div>kod pocztowy: ${address.postCode}</div>
            <div>miasto: ${address.city}</div>
            <br/>
            <div>produkty</div>
            ${products.map(
                (p) => `
                <div>Nazwa: ${p.product.name}</div>
                <div>Ilość: ${p.quantity}</div>
                <div>Rozmiar: ${p.size}</div>
            `
            )}
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
    console.log(req.body);
    await sendEmail(
        req.body.customer.email,
        orderEmail({
            price: req.body.price_pln,
            customer: req.body.customer,
            address: req.body.address,
            products: req.body.products,
        })
    );
    res.status(200).send();
    // res.send(req.body);
};