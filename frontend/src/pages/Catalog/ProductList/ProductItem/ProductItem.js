import React from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default function CartItem({ productId }) {
    const product = useSelector(
        (state) => state.products.productsById[productId]
    );
    return (
        <Grid item xs={4} md={3}>
            <Paper
                style={{
                    textAlign: "center",
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        width: "100%",
                        paddingTop: "150%",
                        backgroundImage: `url(${product.images[0].medium})`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}
                />
                <div style={{ padding: 20 }}>
                    <p style={{ fontSize: "13px" }}>{`${product.name}`}</p>
                    <p
                        style={{
                            fontFamily: "Open Sans Condensed",
                            fontWeight: "normal",
                            fontSize: "15px",
                        }}
                    >
                        {`${product.product_cost}`}
                    </p>
                    <Link
                        to={"/catalog/" + `${productId}`}
                        style={{ textDecoration: "none" }}
                    >
                        <Button variant="outlined">Zobacz</Button>
                    </Link>
                </div>
            </Paper>
        </Grid>
    );
}
