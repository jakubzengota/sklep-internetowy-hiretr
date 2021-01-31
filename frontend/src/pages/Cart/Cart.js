import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import { useParams } from "react-router-dom";
import ProductContainer from "../../containers/ProductContainer";


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
            <div style={{ margin: "auto", width: "60%", fontFamily: 'Cinzel'}}>
                <h1>Twój koszyk</h1>
                <div>
                    <Grid container spacing={3}>                    
                        <Grid item xs={8}>  
                            <Paper variant="outlined">
                                <Typography style={{fontFamily: 'Cinzel', padding: '2%'}}>
                                    Miejsce na elementy w koszyku.
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper variant="outlined" style={{padding: '2%'}}>                                                           
                                <span style={{fontSize: '20px'}}>Suma:</span>
                                <br></br>                                
                                <Button variant="outlined" size="small" fullWidth>Realizacja zamówienia</Button>
                                <hr></hr>
                                <div style={{fontFamily: 'Open Sans Condensed', fontSize: '20px'}}>
                                    <h3>DOSTAWA</h3>
                                        Czas dostawy to standardowo 2-3 dni robocze.<br></br>
                                        • Dostawa DHL na adres domowy – 0,00 PLN<br></br>
                                        • Dostawa do paczkomatu InPost 24/7 – 0,00 PLN<br></br>
                                        • Dostawa następnego dnia na adres domowy, 19,90 PLN.<br></br>
                                    <hr></hr>
                                    <p style={{textAlign: 'center'}}>
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
