import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import LoadingButton from "@material-ui/lab/LoadingButton";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useFormik, Formik, Form } from "formik";
import * as yup from "yup";

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: "relative",
    },
    layout: {
        width: "auto",
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: "auto",
            marginRight: "auto",
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: "flex",
        justifyContent: "flex-end",
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

const steps = ["Shipping address", "Payment details", "Review your order"];

const validationSchema = [
    yup.object().shape({
        firstName: yup
            .string()
            .min(2, "Too Short!")
            .max(50, "Too Long!")
            .required("Required"),
        lastName: yup
            .string()
            .min(2, "Too Short!")
            .max(50, "Too Long!")
            .required("Required"),
    }),
    yup.object().shape({
        shipping: yup.string().required("Required"),
    }),
    yup.object().shape({
        payment: yup.string().required("Required"),
    }),
];

const initialValues = {
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    shipping: "Dostawa kurierem",
    payment: "Szybkie płatności",
    shippingId: null,
};

function getStepContent(step) {
    switch (step) {
        case 0:
            return <AddressForm />;
        case 1:
            return <PaymentForm />;
        case 2:
            return <Review />;
        default:
            throw new Error("Unknown step");
    }
}

export default function Checkout() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const currentValidationSchema = validationSchema[activeStep];
    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };
    const handleSubmit = (values, actions) => {
        if (activeStep === steps.length - 1) {
            const submit = async (values, actions) => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
                setActiveStep(activeStep + 1);
            };
            submit(values, actions);
        } else {
            setActiveStep(activeStep + 1);
            actions.setTouched({});
            actions.setSubmitting(false);
        }
    };

    return (
        <Container>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h4" align="center">
                        Checkout
                    </Typography>
                    <Stepper
                        activeStep={activeStep}
                        className={classes.stepper}
                    >
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <Typography variant="h5" gutterBottom>
                                    Thank you for your order.
                                </Typography>
                                <Typography variant="subtitle1">
                                    Your order number is #2001539. We have
                                    emailed your order confirmation, and will
                                    send you an update when your order has
                                    shipped.
                                </Typography>
                            </React.Fragment>
                        ) : (
                            <Formik
                                initialValues={initialValues}
                                validationSchema={currentValidationSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ isSubmitting }) => (
                                    <Form>
                                        {getStepContent(activeStep)}
                                        <div className={classes.buttons}>
                                            {activeStep !== 0 && (
                                                <Button
                                                    onClick={handleBack}
                                                    className={classes.button}
                                                >
                                                    Back
                                                </Button>
                                            )}
                                            <LoadingButton
                                                variant="contained"
                                                color="primary"
                                                pending={isSubmitting}
                                                //size 30 fixes offcenter bug
                                                pendingIndicator={
                                                    <CircularProgress
                                                        color="inherit"
                                                        size={30}
                                                    />
                                                }
                                                className={classes.button}
                                                type="submit"
                                            >
                                                {activeStep === steps.length - 1
                                                    ? "Place order"
                                                    : "Next"}
                                            </LoadingButton>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        )}
                    </React.Fragment>
                </Paper>
            </main>
        </Container>
    );
}
