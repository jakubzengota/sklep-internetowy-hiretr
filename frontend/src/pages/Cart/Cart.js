import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ItemList from "./ItemList";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
    paperRoot: {
        width: "100%",
        height: "100%",
    },
    root: {
        fontSize: "30px",
    },
}));

function Cart() {
    const classes = useStyles();

    const sum = useSelector(
        (state) =>
            state.cart.itemIds.reduce(
                (acc, id) =>
                    state.cart.itemsById[id].product.product_cost *
                    state.cart.itemsById[id].quantity,
                0
            ) + 20
    );
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
                <h1>Twój koszyk</h1>
                <div>
                    <Grid container spacing={3}>
                        <Grid item xs={8}>
                            <ItemList />
                        </Grid>
                        <Grid item xs={4}>
                            <Paper variant="outlined" style={{ padding: "2%" }}>
                                <span
                                    style={{ fontSize: "20px" }}
                                >{`Suma: ${sum}`}</span>
                                <br></br>
                                <Link
                                    to={"/finalize"}
                                    style={{ textDecoration: "none" }}
                                >
                                    <Button
                                        variant="outlined"
                                        size="small"
                                        fullWidth
                                    >
                                        Zamawiam
                                    </Button>
                                </Link>
                                <hr></hr>
                                <div
                                    style={{
                                        fontFamily: "Open Sans Condensed",
                                        fontSize: "20px",
                                    }}
                                >
                                    <h3>DOSTAWA</h3>
                                    Czas dostawy to standardowo 2-3 dni robocze.
                                    <br></br>• Dostawa DHL na adres domowy –
                                    0,00 PLN<br></br>• Dostawa następnego dnia
                                    na adres domowy – 19,90 PLN.<br></br>
                                    <hr></hr>
                                    <p style={{ textAlign: "center" }}>
                                        30 dni na zwrot
                                    </p>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Cart;
