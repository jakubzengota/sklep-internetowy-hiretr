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
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "./contact.css";

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

const position = [52.45513363397987, 16.907653346834167]

function Contact() { 

    return (
        <React.Fragment>
            <div style={{marginTop: '1%'}}>
                <img style={{width: '100%'}} src="https://i.imgur.com/362Mt0H.png"/>
            </div>
            <div style={{ margin: "auto", width: "60%", fontFamily: "Cinzel", paddingBottom: '5%' }}>                
                <h1>Kontakt</h1>
                <div>                
                    <Grid container spacing={3}>
                        <Grid item xs={8}>
                            <div id="mapid" style={{height: '50%'}}>
                                <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                                    <TileLayer
                                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <Marker position={position}>
                                    <Popup>
                                        Koszulkowo <br /> Nasza siedziba!
                                    </Popup>
                                    </Marker>
                                </MapContainer>
                            </div>
                        </Grid>
                        <Grid item xs={4}>                         
                            <div
                                style={{
                                    fontFamily: "Open Sans Condensed",
                                    fontSize: "17px",
                                    padding: "4%", 
                                    height: '100%',
                                    flexWrap: 'wrap'
                                }}
                            >
                                <p>
                                Dane odbiorcy:
                                </p>
                                Hiretr sp. z o.o. <br></br>
                                ul. Koszulkowa 23, <br></br>
                                34-078 Koszulkowo
                                
                                <p >
                                Telefon kontaktowy:
                                </p>
                                598 584 324

                                <p>
                                E-mail:
                                </p>
                                kontakt@koszulkowo.pl
                                
                                <p>
                                Numer rachunku:
                                </p>
                                PL 98114011243630010353035239
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Contact;
