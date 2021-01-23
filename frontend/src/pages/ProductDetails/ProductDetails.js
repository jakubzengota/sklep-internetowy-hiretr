import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { useParams } from "react-router-dom";

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
    {
        value: 'XS',
        label: 'XS',
    },
    {
        value: 'S',
        label: 'S',
    },
    {
        value: 'M',
        label: 'M',
    },
    {
        value: 'L',
        label: 'L',
    },
    {
        value: 'XL',
        label: 'XL',
    },
    {
        value: 'XXL',
        label: 'XXL',
    },
];

function ProductDetails() {
    const {id} = useParams()
    const [state, setState] = React.useState({
        activeProduct: {
            id: "",
            name: "",
            product_cost: "",
            description: "",
            amount: 1,
            size: ""
        },
    });


    React.useEffect(async () => {
        const response = await fetch(`http://localhost:4000/products/${id}`);
        const json = await response.json();
        setState({
            activeProduct: json.product
        });
    }, []);

    const classes = useStyles();
    const [option, setSize] = React.useState('XXL');


   const addProduct = (event, product) => {
       let toSave = {
           id: product.id,
           name: product.name,
           price: product.product_cost,
           amount: product.amount,
           size: product.size
       }
       console.log(toSave);
    }

   const handleChange = (event) => {
       let { name, value } = event.target;
       if(event.target.type === "text"){
        setSize(event.target.value);
       }
       let activeProduct = {...state.activeProduct, [name]: value};
       setState({activeProduct});
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
                        {state.activeProduct.name}
                        </Typography>                     
                        <Typography
                            style={{
                                color: "black",
                                fontFamily: "Cinzel",
                                fontWeight: 800,
                                marginBottom: "25px",
                            }}
                        >   
                        {state.activeProduct.product_cost}
                        </Typography>
                        <Typography
                            style={{
                                color: "black",
                                marginBottom: "25px",
                            }}
                        >   
                        {state.activeProduct.description}
                        </Typography>                        
                        
                        <div className={classes.root}>
                        <TextField
                        id="outlined-select"
                        select
                        type = "text"
                        label="Size"
                        name= "size"
                        value={option}
                        onChange={handleChange}
                        SelectProps={{
                            native: true,
                        }}
                        variant="outlined">
                            {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                        </TextField>
                        </div><br></br>

                        <FormControl className={classes.margin}>
                            <TextField id="outlined-basic" name="amount" label="Amount" type="number" onChange={handleChange}/>
                        </FormControl>
                        <br></br><br></br>
                        <div>
                            <Button variant="outlined" color="primary" onClick={(event) => addProduct(event, state.activeProduct)}>
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
