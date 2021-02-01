import React from "react";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
function Summary() {
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
                <h1>Podsumowanie</h1>   
                <div>
                    <h3>Dane kontaktowe</h3>
                    <div style={{fontFamily: 'Open Sans Condensed', fontSize: '20px'}}>
                        Imie Nazwisko
                        <br></br>
                        Email
                        <br></br>
                        Telefon (jesli podany)
                        <br></br>
                        Ulica Nr domu Nr mieszkania
                        <br></br>
                        Miasto Kod pocztowy
                        <br></br>

                    </div>
                </div> 
                <br></br>
                <div>
                    <h3>Wybrane produkty</h3>
                    <div>
                        <Grid item xs={8}>  
                           <div style={{display: "flex",}}>
                            <div style={{height: 60, width: 50, backgroundColor: "purple",}}></div> 
                            <div style={{flexGrow: 1, padding: 10,}}>
                                <Typography style={{fontFamily: 'Open Sans Condensed', fontSize: '20px'}}>
                                    Bluza Rozmiar: XL Ilość: 2 Cena: 59,99 PLN
                                </Typography>     
                                </div>
                            </div>                        
                              
                        </Grid>
                    </div>
                </div>
                <br></br>
                <div>
                    <h3>Dostawa</h3>
                    <div style={{fontFamily: 'Open Sans Condensed', fontSize: '20px'}}>
                    Dostawa DHL na adres domowy – 0,00 PLN
                    </div>
                </div>
                <br></br>
                <div>
                    <h3>Płatność</h3>
                    <div style={{fontFamily: 'Open Sans Condensed', fontSize: '20px'}}>
                    Przelew tradycyjny
                    </div>
                </div>
                <br></br>
                <hr></hr>
                <h2>Do zapłaty: 59,99 PLN</h2>
                <br></br>
                <Link
                to={"/payment"}
                style={{ textDecoration: "none" }}
                >
                <Button variant="outlined">Zapłać</Button>
                </Link>  
                <br></br>
                <br></br> 
            </div>
        </React.Fragment>
    );
}

export default Summary;