import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles((theme) => ({
    paperRoot: {
        width: "600px",        
        height: "800px",
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
                <br></br>  
            <div style={{ margin: "auto", width: "90%" }}>
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
                        Item name
                        </Typography>                     
                        <Typography
                            style={{
                                color: "black",
                                fontFamily: "Cinzel",
                                fontWeight: 800,
                                marginBottom: "25px",
                            }}
                        >   
                        Price
                        </Typography>                        
                        <Typography
                            style={{
                                color: "black",
                                fontFamily: "Cinzel",
                                fontWeight: 800,
                                fontSize: "15px",
                                marginBottom: "30px",
                            }}
                        >   
                        Description
                        </Typography>   
                        
                        <div className={classes.root}>
                            <List component="nav" aria-label="Size options">
                                <ListItem
                                button
                                aria-haspopup="true"
                                aria-controls="lock-menu"
                                aria-label="Choose your size"
                                onClick={handleClickListItem}
                                >
                                <ListItemText primary="Choose your size" secondary={options[selectedIndex]} />
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

                        <FormControl className={classes.margin}>
                            <TextField id="outlined-basic" label="Type in amount" variant="outlined" />
                        </FormControl>
                        <br></br>
                        <div>
                            <Button variant="outlined" color="primary">
                                Add to Cart
                            </Button>  
                        </div>          
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
}

export default ProductDetails;