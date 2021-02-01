import React from "react";
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
function Finalize() {
    const [state, setState] = React.useState({
        loadData: false,
        freeShipping: false,
        paidShipping: false,
        payment: true,
      });

      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
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
            <div style={{ margin: "auto", width: "60%", fontFamily: 'Cinzel'}}>
                <h1>Uzupełnij dane</h1>
                <FormControlLabel
                control={
                    <Checkbox
                    checked={state.loadData}
                    onChange={handleChange}
                    name="loadData"
                    color="primary"
                    />
                }
                label="Wykorzystaj zapisane już dane kontaktowe"
                />
                <div>
                <TextField
                variant="outlined"
                required
                name="name"
                label="Imię"
                type="text"
                id="name"
                style={{marginRight: '10px'}}
                />
                <TextField
                variant="outlined"
                required
                name="lastname"
                label="Nazwisko"
                type="text"
                id="lastname"
                />
                </div>
                <br>
                </br>
                <div>
                <TextField
                variant="outlined"
                required
                name="email"
                label="Email:"
                type="email"
                id="email"
                style={{marginRight: '10px'}}
                />
                <TextField
                variant="outlined"
                name="phonenr"
                label="Numer telefonu:"
                type="text"
                id="phonenr"
                />
                </div>
                <br></br>
                <div>
                <TextField
                variant="outlined"
                required
                name="street"
                label="Ulica"
                type="text"
                id="street"
                style={{marginRight: '10px'}}
                />
                 <TextField
                variant="outlined"
                required
                name="nrstreet"
                label="Nr domu"
                type="text"
                id="nrstreet"
                style={{marginRight: '10px'}}
                />
                <TextField
                variant="outlined"
                name="nrflat"
                label="Nr mieszkania"
                type="text"
                id="nrflat"
                />
                </div>
                <br></br>
                <div>
                <TextField
                variant="outlined"
                required
                name="city"
                label="Miasto"
                type="text"
                id="city"
                style={{marginRight: '10px'}}
                />
                <TextField
                variant="outlined"
                required
                name="postcode"
                label="Kod pocztowy"
                type="text"
                id="postcode"
                />
                </div>
                <h1>Sposób dostawy</h1>
                <div>
                <FormControlLabel
                control={
                    <Checkbox
                    checked={state.freeShipping}
                    onChange={handleChange}
                    name="freeShipping"
                    color="primary"
                    />
                }
                label="Dostawa DHL na adres domowy – 0,00 PLN"
                />
                <br></br>
                 <FormControlLabel
                control={
                    <Checkbox
                    checked={state.paidShipping}
                    onChange={handleChange}
                    name="paidShipping"
                    color="primary"
                    />
                }
                label="Dostawa następnego dnia na adres domowy – 19,90 PLN."
                />
                </div>
                <h1>Sposób płatności</h1>
                <div>
                <FormControlLabel
                control={
                    <Checkbox
                    checked={state.payment}
                    required
                    onChange={handleChange}
                    name="payment"
                    color="primary"
                    />
                }
                label="Przelew tradycyjny"
                />
                </div>
                <br></br>
                <Link
                to={"/summary"}
                style={{ textDecoration: "none" }}
                >
                <Button variant="outlined">Podsumowanie</Button>
                </Link>  
                <br></br>
                <br></br>          
            </div>
        </React.Fragment>
    );
}

export default Finalize;
