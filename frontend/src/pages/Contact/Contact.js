import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Link, useLocation } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import { useSelector, useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        marginRight: theme.spacing(2),
    },
    paper2: {
        textAlign: "center",
        overflow: "hidden",
    },
}));

function Contact() { 

    return (
        <React.Fragment>
            <div style={{marginTop: '1%'}}>
                <img src="https://i.imgur.com/362Mt0H.png"/>
            </div>
            <div style={{ margin: "auto", width: "60%", fontFamily: "Cinzel", paddingBottom: '5%' }}>                
                <h1>Kontakt</h1>
                <div>
                    <Grid container spacing={3}>
                        <Grid item xs={8}>
                            
                        </Grid>
                        <Grid item xs={4}>
                            <Paper variant="outlined" style={{ padding: "4%", height: 430 }}>                                
                                <div
                                    style={{
                                        fontFamily: "Open Sans Condensed",
                                        fontSize: "20px",
                                    }}
                                >
                                    <p style={{ fontFamily: "Cinzel", fontSize: "15px" }}>
                                    Dane odbiorcy:
                                    </p>
                                    Hiretr sp. z o.o. <br></br>
                                    ul. Koszulkowa 23, <br></br>
                                    34-078 Koszulkowo
                                    
                                    <p style={{ fontFamily: "Cinzel", fontSize: "15px" }}>
                                    Telefon kontaktowy:
                                    </p>
                                    598 584 324

                                    <p style={{ fontFamily: "Cinzel", fontSize: "15px" }}>
                                    E-mail:
                                    </p>
                                    kontakt@koszulkowo.pl
                                    
                                    <p style={{ fontFamily: "Cinzel", fontSize: "15px" }}>
                                    Numer rachunku:
                                    </p>
                                    PL 98114011243630010353035239
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Contact;
