import React from "react";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Popper from '@material-ui/core/Popper';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

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

export default function Cart() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyles();
    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
        };


    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;
        
    return (
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
        <div className={classes.paper}>
        <br></br>
        <p style={{fontFamily: 'Cinzel', fontWeight: 800}}>0.00 PLN</p>
        <Button variant="outlined">checkout</Button> 
        </div>
      </Popper>
        </Grid>    
        )
}