import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

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

function Catalog() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        open: false,
        products: [],
    });

    const handleToggle = () => {
        setState({
            ...state,
            open: !state.open,
        });
    };
    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setState({
            ...state,
            open: false,
        });
    };
    function handleListKeyDown(event) {
        if (event.key === "Tab") {
            event.preventDefault();
            setState({
                ...state,
                open: false,
            });
        }
    }

    const anchorRef = React.useRef(null);
    function ProductCard({ name, price, id, image }) {
        return (
            <Grid item xs={4} md={3}>
                <Paper className={classes.paper2}>
                    <div
                        style={{
                            width: "100%",
                            paddingTop: "150%",
                            backgroundImage: `url(${image})`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                        }}
                    />
                    <div style={{ padding: 20 }}>
                        {`${name} ${price}`}
                        <br></br>
                        <Link
                            to={"/catalog/" + `${id}`}
                            style={{ textDecoration: "none" }}
                        >
                            <Button variant="outlined">Details</Button>
                        </Link>
                    </div>
                </Paper>
            </Grid>
        );
    }

    // return focus to the button when we transitioned from !state.open -> state.open
    const prevOpen = React.useRef(state.open);
    React.useEffect(() => {
        if (prevOpen.current === true && state.open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = state.open;
    }, [state.open]);
    React.useEffect(async () => {
        const response = await fetch("http://localhost:4000/products");
        const json = await response.json();
        setState({
            ...state,
            products: json.Products,
        });
    }, []);

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
                <div className={classes.root}>
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
                                Sort by
                                <ExpandMoreIcon
                                    ref={anchorRef}
                                    aria-controls={
                                        state.open
                                            ? "menu-list-grow"
                                            : undefined
                                    }
                                    aria-haspopup="true"
                                    onClick={handleToggle}
                                ></ExpandMoreIcon>
                            </Typography>
                            <Popper
                                open={state.open}
                                anchorEl={anchorRef.current}
                                role={undefined}
                                transition
                                disablePortal
                            >
                                {({ TransitionProps, placement }) => (
                                    <Grow
                                        {...TransitionProps}
                                        style={{
                                            transformOrigin:
                                                placement === "bottom"
                                                    ? "center top"
                                                    : "center bottom",
                                        }}
                                    >
                                        <Paper>
                                            <ClickAwayListener
                                                onClickAway={handleClose}
                                            >
                                                <MenuList
                                                    autoFocusItem={state.open}
                                                    id="menu-list-grow"
                                                    onKeyDown={
                                                        handleListKeyDown
                                                    }
                                                >
                                                    <MenuItem
                                                        onClick={handleClose}
                                                    >
                                                        option
                                                    </MenuItem>
                                                    <MenuItem
                                                        onClick={handleClose}
                                                    >
                                                        option
                                                    </MenuItem>
                                                    <MenuItem
                                                        onClick={handleClose}
                                                    >
                                                        option
                                                    </MenuItem>
                                                </MenuList>
                                            </ClickAwayListener>
                                        </Paper>
                                    </Grow>
                                )}
                            </Popper>
                        </Toolbar>
                    </AppBar>
                </div>
                <br></br>

                <div style={{ margin: "auto", width: "90%" }}>
                    <Grid
                        container
                        spacing={3}
                        style={{
                            paddingTop: "30px",
                            width: "90%",
                            margin: "auto",
                        }}
                    >
                        {state.products.map((product) => (
                            <ProductCard
                                style={{ width: "20%" }}
                                name={product.name}
                                price={product.product_cost}
                                id={product.id}
                                image={product.images[0].medium}
                            />
                        ))}
                    </Grid>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Catalog;
