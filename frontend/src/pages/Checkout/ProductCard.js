import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import DeleteIcon from "@material-ui/icons/Delete";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    details: {
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
    },
    content: {
        flex: "1 0 auto",
    },
    cover: {
        width: 151,
    },
    controls: {
        display: "flex",
        alignItems: "center",
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    disabled: {
        backgroundColor: theme.palette.primary,
    },
}));

export default function ProductCard() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                image="http://localhost:4000/images/thumbs/medium/d1833199e6c3a4de532f75bedf54f2ff56645bf0.jpg"
                title="Live from space album cover"
            />

            <div className={classes.details}>
                <CardContent>
                    <ButtonGroup
                        color="primary"
                        aria-label="outlined primary button group"
                        size="small"
                    >
                        <Button>
                            <RemoveIcon />
                        </Button>
                        <Button
                            classes={{ disabled: classes.disabled }}
                            disabled
                        >
                            0
                        </Button>
                        <Button>
                            <AddIcon />
                        </Button>
                    </ButtonGroup>
                    <Typography variant="h5" component="h2">
                        Tytuł produktu
                    </Typography>
                    <Typography gutterBottom color="textSecondary">
                        kolor: żółty
                    </Typography>
                    <Typography
                        style={{ marginBottom: 12 }}
                        color="textSecondary"
                    >
                        rozmiar: M
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button startIcon={<DeleteIcon />}>usuń</Button>
                    <div style={{ flexGrow: 1 }} />
                    <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
                        20.00zł
                    </Typography>
                </CardActions>
            </div>
            <div style={{ flexGrow: 1 }} />
        </Card>
    );
}
