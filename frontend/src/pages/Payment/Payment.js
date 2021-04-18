import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";

function Payment() {
    const products = useSelector((state) =>
        state.cart.itemIds.map((id) => ({
            product: state.cart.itemsById[id].product,
            size: state.cart.itemsById[id].size,
            quantity: state.cart.itemsById[id].quantity,
        }))
    );
    const sum = useSelector((state) =>
        (
            state.cart.itemIds.reduce(
                (acc, id) =>
                    state.cart.itemsById[id].product.product_cost *
                        state.cart.itemsById[id].quantity +
                    acc,
                0
            ) + 20
        ).toFixed(2)
    );
    const location = useLocation();
    const {
        firstName,
        lastName,
        email,
        phoneNumber,
        street,
        houseNumber,
        apratmentNumber,
        city,
        postalCode,
        notes,
    } = location.state;
    React.useEffect(() => {
        const placeOrder = async () => {
            await fetch("http://localhost:4000/orders/place", {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    price_pln: sum,
                    customer: {
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        phone: phoneNumber,
                    },
                    address: {
                        street: street,
                        houseNumber: houseNumber,
                        postCode: postalCode,
                        apartmentNumber: apratmentNumber,
                        city: city,
                    },
                    products: products,
                }),
            });
        };
        placeOrder();
    }, []);

    return (
        <React.Fragment>
            <div
                style={{
                    backgroundImage:
                        "url(" + "https://i.imgur.com/6XhoraV.png" + ")",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <br></br>
            </div>
            <div style={{ margin: "auto", width: "60%", fontFamily: "Cinzel" }}>
                <h1>Dane do przelewu</h1>
                <div
                    style={{
                        fontFamily: "Open Sans Condensed",
                        fontSize: "20px",
                    }}
                >
                    Poniżej znajduje się numer rachunku, na który należy wpłacić
                    59,99 PLN
                    <hr></hr>
                    <p style={{ fontFamily: "Cinzel", fontSize: "15px" }}>
                        Dane odbiorcy:
                    </p>
                    Hiretr sp. z o.o.<br></br>
                    ul. Koszulkowa 23, 34-078 Koszulkowo
                    <p style={{ fontFamily: "Cinzel", fontSize: "15px" }}>
                        Bank:
                    </p>
                    BRE BANK SA O/REG. w Koszulkowie
                    <p style={{ fontFamily: "Cinzel", fontSize: "15px" }}>
                        Numer rachunku:
                    </p>
                    PL 98114011243630010353035239
                    <p style={{ fontFamily: "Cinzel", fontSize: "15px" }}>
                        Tytuł przelewu:
                    </p>
                    (id:43454534) Hiretr Sklep
                    <p style={{ fontFamily: "Cinzel", fontSize: "15px" }}>
                        Kwota:
                    </p>
                    59,99 PLN
                    <hr></hr>
                    Po dokonanej płatności skontaktujemy się z Tobą drogą
                    mailową.
                </div>
                <br></br>
                <Link to={"/"} style={{ textDecoration: "none" }}>
                    <Button variant="outlined">Strona główna</Button>
                </Link>
                <br></br>
                <br></br>
            </div>
        </React.Fragment>
    );
}

export default Payment;