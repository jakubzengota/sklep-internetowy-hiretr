import React from "react";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import "./AppBar.css";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    appBar: {
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: "#d2c1c9",
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: "none",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: "flex-end",
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

export default function DenseAppBar() {
    const authenticated = false;
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setOpen(false);
    };

    return (
        <div styles={{ flexGrow: 1 }}>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(
                            classes.menuButton,
                            open && classes.hide
                        )}
                    >
                        <MenuIcon />
                    </IconButton>

                    {!authenticated && (
                        <Typography
                            style={{
                                fontSize: "15px",
                                fontFamily: "Cinzel",
                                fontWeight: 800,
                                alignItems: "center",
                            }}
                        >
                            <Link
                                style={{
                                    textDecoration: "none",
                                    color: "white",
                                    paddingRight: "15px",
                                }}
                                to="/signin"
                            >
                                <PermIdentityIcon></PermIdentityIcon>Zaloguj się
                            </Link>
                        </Typography>
                    )}
                    <Typography
                        style={{
                            fontSize: "15px",
                            fontFamily: "Cinzel",
                            fontWeight: 800,
                            alignItems: "center",
                        }}
                    >
                        <Link
                            style={{ textDecoration: "none", color: "white" }}
                            to="/cart"
                        >
                            <ShoppingCartIcon></ShoppingCartIcon>Koszyk
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                anchor="left"
                variant="temporary"
                open={open}
                onEscapeKeyDown={handleDrawerClose}
                onBackdropClick={handleDrawerClose}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "ltr" ? (
                            <ChevronLeftIcon />
                        ) : (
                            <ChevronRightIcon />
                        )}
                    </IconButton>
                </div>
                <Divider />
                <div
                    role="presentation"
                    onClick={handleDrawerClose}
                    onKeyDown={handleDrawerClose}
                >
                    <List style={{ fontFamily: "Open Sans Condensed" }}>
                        <ListItem button component={Link} to="/">
                            <ListItemText primary="Strona główna" />
                        </ListItem>
                        <ListItem button component={Link} to="/catalog">
                            <ListItemText primary="Produkty" />
                        </ListItem>
                    </List>
                    <Divider />
                </div>
            </Drawer>

            <Grid
                container
                direction="column"
                justify="space-between"
                alignItems="center"
                style={{ paddingTop: "80px" }}
            >
                <img
                    src="https://i.imgur.com/cVrvjAS.png"
                    alt="logo"
                    style={{ width: "150px" }}
                ></img>
            </Grid>

            <Grid
                container
                direction="column"
                justify="space-between"
                alignItems="center"
                style={{
                    fontSize: "20px",
                    fontFamily: "Cinzel",
                    fontWeight: 800,
                    paddingBottom: "10px",
                }}
            ></Grid>
        </div>
    );
}
