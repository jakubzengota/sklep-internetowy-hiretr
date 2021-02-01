import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import { useParams } from "react-router-dom";
import ProductContainer from "../../containers/ProductContainer";
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { Link } from "react-router-dom";



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
                           <div style={{display: "flex",}}>
                            <div style={{height: 160, width: 120, backgroundColor: "red",}}></div> 
                            <div style={{flexGrow: 1, padding: 10,}}>
                                <Typography variant="h6">
                                    Bluza
                                </Typography>
                                <Typography variant="subtitle1">
                                    Kolor: Beżowy
                                </Typography>
                                <Typography variant="subtitle1">
                                    Rozmiar: XL
                                </Typography>
                                <TextField                                        
                                        size="small"
                                        id="standard-number"
                                        label="Ilość"
                                        type="number"
                                        InputProps={{
                                            inputProps: {
                                                min: 1
                                            }
                                        }}
                                        style={{
                                            width: 80,
                                        }}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}/>
                                  
                                    
                            </div>
                            <div>
                                <IconButton disableRipple >
                                    <DeleteIcon size="small"/>
                                </IconButton>
                            </div>
                            </div>                        
                              
                        </Grid>
                        <Grid item xs={4}>
                            <Paper variant="outlined" style={{padding: '2%'}}>                                                           
                                <span style={{fontSize: '20px'}}>Suma:</span>
                                <br></br>  
                                <Link
                                to={"/finalize"}
                                style={{ textDecoration: "none" }}
                        >
                            <Button variant="outlined" size="small" fullWidth>Zamawiam</Button>
                            </Link>                              
                                <hr></hr>
                                <div style={{fontFamily: 'Open Sans Condensed', fontSize: '20px'}}>
                                    <h3>DOSTAWA</h3>
                                        Czas dostawy to standardowo 2-3 dni robocze.<br></br>
                                        • Dostawa DHL na adres domowy – 0,00 PLN<br></br>
                                        • Dostawa następnego dnia na adres domowy – 19,90 PLN.<br></br>
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
