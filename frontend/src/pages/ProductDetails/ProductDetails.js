import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from "@material-ui/core/Toolbar";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useParams } from "react-router-dom";
import ProductContainer from "../../containers/ProductContainer";
import Cart from "../../components/Cart/Cart";
import AppBar from '@material-ui/core/AppBar';


const useStyles = makeStyles((theme) => ({
    paperRoot: {
        width: "100%",        
        height: "100%",
    },
    root: {
        fontSize: "30px",
    },
}));

const options = [
  'XS',
  'S',
  'M',
  'L',
  'XL',
  'XXL',
];

function ProductDetails() {
    const {id} = useParams()
    const products=ProductContainer.useContainer();
    const [state, setState] = React.useState({
        name: "",
        price: "",
        description: ""
    });

console.log(state);
    React.useEffect(async () => {
        const response = await fetch(`http://localhost:4000/products/${id}`);
        const json = await response.json();
        
        setState({
            name: json.product.name,
            price: json.product.product_cost,
            description: json.product.description,
        });
    }, []);

    const classes = useStyles();
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleClickListItem = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const handleAdd = () => {

    // dodanie elementu do tablicy(istniejacej)
        products.setItems(products.items.concat({
            amount: 1,
            product: state,
        }));
    }


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
            ><br></br>
                <AppBar
                        position="static"
                        style={{ backgroundColor: "white", height: "40px" }}
                    >
                        <Toolbar variant="dense">
                            <Typography
                                style={{
                                    color: "black",
                                    fontSize: "15px",
                                    fontFamily: "Cinzel",
                                    fontWeight: 800,
                                }}
                            >
                                <Cart />
                            </Typography>
                        </Toolbar>
                        
                    </AppBar>    
                    <br></br>            
            </div>
 
            <div style={{ margin: "auto", width: "90%" }}>
                <br></br>
                <Grid container spacing={3}>                    
                    <Grid item xs={5}>                        
                        <Paper elevation={3}
                            className={classes.paperRoot}>
                        </Paper>
                    </Grid>
                    <Grid item xs={7}>
                        <Typography
                            style={{
                                color: "black",
                                fontFamily: "Cinzel",
                                fontWeight: 800,
                                fontSize: "30px",
                                marginTop: "20px",
                                marginBottom: "40px",
                            }}
                        >   
                        {state.name}
                        </Typography>                     
                        <Typography
                            style={{
                                color: "black",
                                fontFamily: "Cinzel",
                                fontWeight: 800,
                                marginBottom: "25px",
                            }}
                        >   
                        {state.price}
                        </Typography>                          
                        <p style={{fontFamily: 'Open Sans Condensed', fontSize: '20px', fontWeight:'normal'}}>{state.description}</p>
                        <div className={classes.root}>
                            <List component="nav" aria-label="Size options">
                                <ListItem
                                button
                                aria-haspopup="true"
                                aria-controls="lock-menu"
                                aria-label="Choose your size"
                                onClick={handleClickListItem}
                                >
                                <ListItemText primary="Choose your size"  secondary={options[selectedIndex]} />
                                </ListItem>
                            </List>
                            <Menu
                                id="lock-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                {options.map((option, index) => (
                                <MenuItem
                                    key={option}
                                    selected={index === selectedIndex}
                                    onClick={(event) => handleMenuItemClick(event, index)}
                                >
                                    {option}
                                </MenuItem>
                                ))}
                            </Menu>
                            </div>
                        <br></br>
                        <div>
                            <Button onClick={handleAdd} variant="outlined" color="primary">
                                Dodaj do koszyka
                            </Button>  
                        </div>          
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
}

export default ProductDetails;
