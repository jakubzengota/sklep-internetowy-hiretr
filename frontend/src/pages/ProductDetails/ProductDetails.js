import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { useParams } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/slices/cart";
import { fetchProductById } from "../../redux/slices/products";

const useStyles = makeStyles((theme) => ({
    paperRoot: {
        width: "100%",
        height: "100%",
    },
    root: {
        fontSize: "30px",
    },
}));

const options = ["XS", "S", "M", "L", "XL", "XXL"];

function ProductDetails() {
    const classes = useStyles();
    const { id } = useParams();
    const dispatch = useDispatch();
    const { productsById } = useSelector((state) => state.products);
    const product = productsById[id] || {};
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    React.useEffect(async () => {
        await dispatch(fetchProductById(id));
    }, [id]);

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
                            {/* <Cart /> */}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <br></br>
            </div>

            <div style={{ margin: "auto", width: "90%" }}>
                <br></br>
                <Grid container spacing={3}>
                    <Grid item xs={5}>
                        <Paper
                            elevation={3}
                            style={{
                                width: "100%",
                                height: 0,
                                backgroundImage: `url(${product.images && product.images[0].full})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                paddingTop: "170%",
                            }}
                        ></Paper>
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
                            {product.name || ""}
                        </Typography>
                        <Typography
                            style={{
                                color: "black",
                                fontFamily: "Cinzel",
                                fontWeight: 800,
                                marginBottom: "25px",
                            }}
                        >
                            {product.product_cost || ""} zł
                        </Typography>
                        <p
                            style={{
                                fontFamily: "Open Sans Condensed",
                                fontSize: "20px",
                                fontWeight: "normal",
                            }}
                        >
                            {product.description || ""}
                        </p>
                        <div className={classes.root}>
                            <List component="nav" aria-label="Size options">
                                <ListItem
                                    button
                                    aria-haspopup="true"
                                    aria-controls="lock-menu"
                                    aria-label="Choose your size"
                                    onClick={handleClickListItem}
                                >
                                    <ListItemText
                                        primary="Choose your size"
                                        secondary={options[selectedIndex]}
                                    />
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
                                        onClick={(event) =>
                                            handleMenuItemClick(event, index)
                                        }
                                    >
                                        {option}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </div>
                        <br></br>
                        <div>
                            <Button
                                onClick={() =>
                                    dispatch(
                                        addProduct({
                                            product,
                                            quantity: 1,
                                            size: options[selectedIndex],
                                        })
                                    )
                                }
                                variant="outlined"
                                color="primary"
                            >
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
