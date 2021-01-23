import React from "react";
import { Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "./components/AppBar";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import EmailVerification from "./pages/EmailVerification";
import Catalog from "./pages/Catalog";
import ProductDetails from "./pages/ProductDetails";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));



function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/signin">
                    <SignIn />
                </Route>
                <Route exact path="/signup">
                    <SignUp />
                </Route>
                <Route exact path="/verify/:id">
                    <EmailVerification />
                </Route>
                <Route exact path="/catalog">
                    <Catalog />
                </Route>                
                <Route path="/catalog/:id">
                    <ProductDetails />
                </Route>                       
            </Switch>
        </div>
    );
}

export default App;
