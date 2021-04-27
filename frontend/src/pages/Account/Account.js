import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

function Account() {
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
            <div>
                <img style={{width: '100%'}} src="https://i.imgur.com/XpGcbsH.png"/>
            </div>
            <div style={{ margin: "auto", width: "60%", fontFamily: "Cinzel", paddingBottom: '5%' }}>                
                 <h1>Moje konto</h1>
                <div>                
                    <Grid container spacing={3}>
                        <Grid item xs={5}>
                        <Paper variant="outlined" style={{ padding: "4%", height: 250 }}>
                            <h3>Dane</h3>
                            <div
                                style={{
                                    fontFamily: "Open Sans Condensed",
                                    fontSize: "20px",
                                }}
                            >
                                Jan Kowalski
                                <br></br>
                                j.kowalski@gmail.com
                                <br></br>                        
                                ul. Brodnicka 9
                                <br></br>
                                Gdynia 80-209
                                <br></br>
                                +45 709 230
                                <br></br>
                            </div>
                        </Paper>
                        </Grid>
                        <Grid item xs={7}>                        
                            <h3>Moje zamówienia</h3>
                            <div
                                style={{
                                    fontFamily: "Open Sans Condensed",
                                    fontSize: "20px",
                                }}
                            >
                                1. Przykładowe zamówienie
                                <br />
                                2. Przykładowe zamówienie
                                <br />
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Account;
