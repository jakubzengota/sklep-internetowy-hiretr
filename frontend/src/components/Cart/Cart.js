import React from "react";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Popper from '@material-ui/core/Popper';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import ProductContainer from "../../containers/ProductContainer"


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
    const products = ProductContainer.useContainer();
    console.log(products);
    const [state, setState] = React.useState({
        open: false,
        products: [{
            name: "bla",
            product_cost: "30zl",
            id: 1,
        }],
    });

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
        };


    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;



       // ADD ITEM
        

    //DODAJ
    function OneItem({ name, price, id }) {
        return (
            <Grid>
                <Paper className={classes.paper2}>
                    <div
                    />
                    <div style={{ padding: 20 }}>
                        {`${name} ${price}`}
                    </div>
                </Paper>
            </Grid>
        );
    }
        //CHANGE AMOUNNT
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
      <div style={{ margin: "auto", width: "90%" }}>
            
        </div>
    </IconButton>
    <Popper id={id} open={open} anchorEl={anchorEl}>
        <div className={classes.paper}>
        <br></br>
        <Grid
                container
                spacing={3}
                style={{
                    
                }}
            >
                {products.items.map((item) => (
                    <OneItem
                        style={{ width: "20%" }}
                        name={item.product.name}
                        price={item.product.price}
                        id={item.product.id}
                    />
                ))}
            </Grid>
        <p style={{fontFamily: 'Cinzel', fontWeight: 800}}>0.01 PLN</p>
        <Link to={"/cart"} style={{ textDecoration: "none" }}>
            <Button variant="outlined">Zobacz koszyk</Button>
        </Link> 
        </div>
      </Popper>
        </Grid>    
        )
}