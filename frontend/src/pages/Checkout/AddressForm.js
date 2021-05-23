import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextInput from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useField } from "formik";
import { at } from "lodash";

function TextField({ fieldName, ...rest }) {
    const [field, meta, helpers] = useField(fieldName);
    function renderHelperText() {
        const [touched, error] = at(meta, "touched", "error");
        if (touched && error) {
            return error;
        }
    }
    return (
        <TextInput
            error={meta.touched && meta.error && true}
            helperText={renderHelperText()}
            value={field.value}
            onChange={field.onChange}
            {...rest}
        />
    );
}

export default function AddressForm() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Shipping address
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="Imię"
                        fieldName="firstName"
                        fullWidth
                        autoComplete="given-name"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        fieldName="lastName"
                        label="Nazwisko"
                        fullWidth
                        autoComplete="family-name"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="email"
                        name="email"
                        fieldName="email"
                        label="Email"
                        fullWidth
                        autoComplete="email"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="address"
                        name="address"
                        fieldName="address"
                        label="Adres"
                        fullWidth
                        autoComplete="shipping street-address"
                    />
                </Grid>
                {/* <Grid item xs={12}>
                    <TextField
                        id="address2"
                        name="address2"
                        label="numer domu"
                        fieldName="address2"
                        fullWidth
                        autoComplete="shipping address-line2"
                    />
                </Grid> */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        fieldName="city"
                        label="Miasto"
                        fullWidth
                        autoComplete="shipping address-level2"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="state"
                        name="state"
                        fieldName="state"
                        label="Województwo"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="zip"
                        name="zip"
                        label="kod pocztowy"
                        fieldName="zip"
                        fullWidth
                        autoComplete="shipping postal-code"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="country"
                        name="country"
                        fieldName="country"
                        label="Kraj"
                        fullWidth
                        autoComplete="shipping country"
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                color="secondary"
                                name="saveAddress"
                                value="yes"
                            />
                        }
                        label="Use this address for payment details"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
