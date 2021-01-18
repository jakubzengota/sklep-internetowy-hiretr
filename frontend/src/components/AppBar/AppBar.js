import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import './AppBar.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Popper from '@material-ui/core/Popper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
  paper: {
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();
    const authenticated = false;
    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

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
              <Link style={{paddingRight: '15px', textDecoration: 'none'}} to="/signup">Sign Up</Link>
              <Link style={{paddingRight: '10px', textDecoration: 'none'}} to="/signin">Sign In</Link>
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
      <Link style={{textDecoration: 'none'}} to="/catalog">All Products</Link>
      </Grid>   
      <Grid
      container
      direction="row-reverse"
      justify="flex-start"
      alignItems="baseline"
      style={{paddingRight:'15px', fontFamily: 'Cinzel', fontWeight: 800}}> 0.00 PLN
        <IconButton aria-label="cart" onClick={handleClick}>
      <StyledBadge badgeContent={0} color="primary" >
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
    <Popper id={id} open={open} anchorEl={anchorEl}>
        <div className={classes.paper}>Tu będa wybrane produkty :)
        <br></br>
        <p style={{fontFamily: 'Cinzel', fontWeight: 800}}>0.00 PLN</p>
        <Button variant="outlined">checkout</Button> 
        </div>
      </Popper>
        </Grid>    

      </div>

  );
}
