import React from "react";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useFormik } from "formik";

function Finalize() {
    const [state, setState] = React.useState({
        loadData: false,
        freeShipping: false,
        paidShipping: false,
        payment: true,
        permission: false,
    });
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            street: "",
            houseNumber: "",
            apratmentNumber: "",
            city: "",
            postalCode: "",
            notes: "",
        },
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

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
                <h1>Uzupełnij dane</h1>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.loadData}
                            onChange={handleChange}
                            name="loadData"
                            color="primary"
                        />
                    }
                    label="Wykorzystaj zapisane już dane kontaktowe"
                />
                <div>
                    <TextField
                        variant="outlined"
                        required
                        name="firstName"
                        label="Imię"
                        type="text"
                        id="firstName"
                        style={{ marginRight: "10px" }}
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                    />
                    <TextField
                        variant="outlined"
                        required
                        name="lastName"
                        label="Nazwisko"
                        type="text"
                        id="lastName"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                    />
                </div>
                <br></br>
                <div>
                    <TextField
                        variant="outlined"
                        required
                        name="email"
                        label="Email:"
                        type="email"
                        id="email"
                        style={{ marginRight: "10px" }}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    <TextField
                        variant="outlined"
                        name="phoneNumber"
                        label="Numer telefonu:"
                        type="text"
                        id="phoneNumber"
                        value={formik.values.phoneNumber}
                        onChange={formik.handleChange}
                    />
                </div>
                <br></br>
                <div>
                    <TextField
                        variant="outlined"
                        required
                        name="street"
                        label="Ulica"
                        type="text"
                        id="street"
                        style={{ marginRight: "10px" }}
                        value={formik.values.street}
                        onChange={formik.handleChange}
                    />
                    <TextField
                        variant="outlined"
                        required
                        name="houseNumber"
                        label="Nr domu"
                        type="text"
                        id="houseNumber"
                        style={{ marginRight: "10px" }}
                        value={formik.values.houseNumber}
                        onChange={formik.handleChange}
                    />
                    <TextField
                        variant="outlined"
                        name="apratmentNumber"
                        label="Nr mieszkania"
                        type="text"
                        id="apratmentNumber"
                        value={formik.values.apratmentNumber}
                        onChange={formik.handleChange}
                    />
                </div>
                <br></br>
                <div>
                    <TextField
                        variant="outlined"
                        required
                        name="city"
                        label="Miasto"
                        type="text"
                        id="city"
                        style={{ marginRight: "10px" }}
                        value={formik.values.city}
                        onChange={formik.handleChange}
                    />
                    <TextField
                        variant="outlined"
                        required
                        name="postalCode"
                        label="Kod pocztowy"
                        type="text"
                        id="postalCode"
                        value={formik.values.postalCode}
                        onChange={formik.handleChange}
                    />
                </div>
                <h1>Dodaj komentarz do zamówienia</h1>
                <TextField
                        variant="outlined"
                        required
                        name="notes"
                        label="Komentarz"
                        type="text"
                        id="notes"
                        value={formik.values.notes}
                        onChange={formik.handleChange}
                        fullWidth={true}
                />
                <h1>Sposób dostawy</h1>
                <div>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={state.freeShipping}
                                onChange={handleChange}
                                name="freeShipping"
                                color="primary"
                            />
                        }
                        label="Dostawa DHL na adres domowy – 0,00 PLN"
                    />
                    <br></br>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={state.paidShipping}
                                onChange={handleChange}
                                name="paidShipping"
                                color="primary"
                            />
                        }
                        label="Dostawa następnego dnia na adres domowy – 19,90 PLN."
                    />
                </div>
                <h1>Sposób płatności</h1>
                <div>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={state.payment}
                                required
                                onChange={handleChange}
                                name="payment"
                                color="primary"
                            />
                        }
                        label="Przelew tradycyjny"
                    />
                </div>
                <hr></hr>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.permission}
                            required
                            onChange={handleChange}
                            name="permission"
                            color="primary"
                        />
                    }
                    label="Wyrażam zgodę na przetwarzanie moich danych osobowych przez Hiretr sp. z o.o oraz przedstawicieli firm kurierskich do potrzeb związanych z dostawą zgodnie z Ustawą o Ochronie Danych Osobowych (Dz. U. 1997 nr 133 poz. 883)."
                />
                <br></br>
                <br></br>
                <Link
                    to={{
                        pathname: "summary",
                        state: formik.values,
                    }}
                    style={{ textDecoration: "none" }}
                >
                    <Button variant="outlined">Podsumowanie</Button>
                </Link>
                <br></br>
                <br></br>
            </div>
        </React.Fragment>
    );
}

export default Finalize;
