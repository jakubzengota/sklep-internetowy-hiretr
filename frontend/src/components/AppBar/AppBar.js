import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import './AppBar.css'
import Cart from '../Cart/Cart';

export default function DenseAppBar() {
  
    const authenticated = false;

  return (
    <div styles={{flexGrow: 1}}>
      <AppBar position="static" style={{height: "35px", alignItems: 'center', backgroundColor: '#d2c1c9'}}>
        <Toolbar variant="dense">
          <Typography style={{fontSize: '15px', fontFamily: 'Cinzel', fontWeight: 800}}>
            FREE SHIPPING | FREE RETURNS
          </Typography>
        </Toolbar>
      </AppBar>

     {!authenticated && (
          <Grid
          container
          direction="row-reverse"
          justify="flex-start"
          alignItems="baseline"
          style={{fontSize: '20px', fontFamily: 'Cinzel', fontWeight: 800, paddingTop: '10px'}}
          >
              <Link style={{paddingRight: '15px', textDecoration: 'none', color: 'black'}} to="/signup">Sign Up</Link>
              <Link style={{paddingRight: '10px', textDecoration: 'none', color: 'black'}} to="/signin">Sign In</Link>
          </Grid>
     )}
      <Grid
      container
      direction="column"
      justify="space-between"
      alignItems="center"
      style={{paddingTop:'15px'}}
      >
      <img src='https://i.imgur.com/cVrvjAS.png' alt="logo" style={{width: '150px'}}></img>
      </Grid>
      <Grid
     container
     direction="column"
     justify="space-between"
     alignItems="center"
      style={{fontSize:'20px', fontFamily: 'Cinzel', fontWeight: 800, paddingBottom: '10px'}}
      >
      <Link style={{textDecoration: 'none', color: 'black'}} to="/catalog">All Products</Link>
      </Grid>   
      < Cart />   
      </div>

  );
}