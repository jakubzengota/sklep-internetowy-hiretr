import React from "react";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Radio from "@material-ui/core/Radio";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import { useField } from "formik";
import CheckoutContext from "./CheckoutContext";

function PaymentField({ name, fieldName }) {
    const [field, meta, helpers] = useField(fieldName);
    const { value } = meta;
    const { setValue } = helpers;
    return (
        <ListItem
            key={value}
            role={undefined}
            dense
            button
            onClick={() => setValue(name)}
        >
            <ListItemIcon>
                <Radio checked={value === name} value={name} />
            </ListItemIcon>
            <ListItemText primary={name} />
        </ListItem>
    );
}

function ShippingField({ fieldName, shipping }) {
    const { id, name, description, cost } = shipping;
    const [field, meta, helpers] = useField(fieldName);
    const { value } = meta;
    const { setValue } = helpers;
    return (
        <ListItem
            key={name}
            role={undefined}
            dense
            button
            onClick={() => setValue(id)}
        >
            <ListItemIcon>
                <Radio checked={value === id} value={id} />
            </ListItemIcon>
            <ListItemText primary={name} secondary={description} />
            <ListItemSecondaryAction>
                <Typography variant="subtitle1">{cost}</Typography>
                <Typography>{meta.touched && meta.error}</Typography>
            </ListItemSecondaryAction>
        </ListItem>
    );
}

export default function PaymentForm() {
    const { shipping, payment } = React.useContext(CheckoutContext);
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Order summary
            </Typography>
            <List disablePadding>
                {payment.map((value) => (
                    <PaymentField name={value} fieldName="payment" />
                ))}
            </List>
            <Typography variant="h6" gutterBottom>
                Payment method
            </Typography>
            <List>
                {shipping.map((s) => (
                    <ShippingField shipping={s} fieldName="shippingId" />
                ))}
            </List>
        </React.Fragment>
    );
}
