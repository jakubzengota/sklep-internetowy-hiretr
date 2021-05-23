import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { useFormikContext } from "formik";
import { useSelector } from "react-redux";
import CheckoutContext from "./CheckoutContext";

const useStyles = makeStyles((theme) => ({
    listItem: {
        padding: theme.spacing(1, 0),
    },
    total: {
        fontWeight: 700,
    },
    title: {
        marginTop: theme.spacing(2),
    },
}));

const priceToPLN = (price) => price.toFixed(2).replace(".", ",").concat(" PLN");

export default function Review() {
    const classes = useStyles();
    const { shipping } = React.useContext(CheckoutContext);
    const products = useSelector((state) =>
        state.cart.itemIds.map((id) => state.cart.itemsById[id])
    );
    const { values } = useFormikContext();
    const s = shipping.find((s) => s.id === values.shippingId);
    const productCost = products.reduce(
        (acc, val) => (acc += val.product.product_cost * val.quantity),
        0
    );
    const totalCost = productCost + s.cost;
    const addresses = [
        values.address,
        values.city,
        values.zip,
        values.country,
        values.state,
    ];
    const payments = [
        { name: "Dostawa", detail: values.shipping },
        { name: "Typ płatności", detail: values.payment },
    ];
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Podsumowanie zamówienia
            </Typography>
            <List disablePadding>
                {products.map((product) => (
                    <ListItem
                        className={classes.listItem}
                        key={product.product.name}
                    >
                        <ListItemText
                            primary={product.product.name}
                            secondary={`Rozmiar: ${product.size}, ilość: ${product.quantity}`}
                        />
                        <Typography variant="body2">
                            {priceToPLN(
                                parseFloat(product.product.product_cost)
                            )}
                        </Typography>
                    </ListItem>
                ))}
                <ListItem className={classes.listItem}>
                    <ListItemText primary="Shipping" />
                    <Typography variant="body2">
                        {priceToPLN(s.cost)}
                    </Typography>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" className={classes.total}>
                        {priceToPLN(totalCost)}
                    </Typography>
                </ListItem>
            </List>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography
                        variant="h6"
                        gutterBottom
                        className={classes.title}
                    >
                        Dostawa
                    </Typography>
                    <Typography
                        gutterBottom
                    >{`${values.firstName} ${values.lastName}`}</Typography>
                    <Typography gutterBottom>{addresses.join(", ")}</Typography>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography
                        variant="h6"
                        gutterBottom
                        className={classes.title}
                    >
                        Szczegóły płatności
                    </Typography>
                    <Grid container>
                        {payments.map((payment) => (
                            <React.Fragment key={payment.name}>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>
                                        {payment.name}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>
                                        {payment.detail}
                                    </Typography>
                                </Grid>
                            </React.Fragment>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
