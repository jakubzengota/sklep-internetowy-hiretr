import React from "react";
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
        marginRight: theme.spacing(2)
      },
    paper2: {
        padding: theme.spacing(6),
        textAlign: 'center',
        height: '300px'
      },
  }));

function Catalog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper2}>Product</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper2}>Product</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper2}>Product</Paper>
        </Grid>
      </React.Fragment>
    );
  }

    return (
        <React.Fragment>
            <div style={{  
                backgroundImage: "url(" + "https://i.imgur.com/6XhoraV.png" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <br></br>
                <div className={classes.root}>
                    <AppBar position="static" style={{backgroundColor: 'white', height: '40px'}}>
                        <Toolbar variant="dense">
                            <Typography style={{color: 'black', fontSize: '15px', fontFamily: 'Cinzel', fontWeight: 800}}>
                                Filter By
                                <ExpandMoreIcon 
                                ref={anchorRef}
                                aria-controls={open ? 'menu-list-grow' : undefined}
                                aria-haspopup="true"
                                onClick={handleToggle}
                                ></ExpandMoreIcon>
                            </Typography>
                            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                                {({ TransitionProps, placement }) => (
                                <Grow
                                {...TransitionProps}
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                >
                                    <Paper>
                                        <ClickAwayListener onClickAway={handleClose}>
                                            <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                                <MenuItem onClick={handleClose}>option</MenuItem>
                                                <MenuItem onClick={handleClose}>option</MenuItem>
                                                <MenuItem onClick={handleClose}>option</MenuItem>
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                                )}
                            </Popper>
                            <Typography style={{color: 'black', fontSize: '15px', fontFamily: 'Cinzel', fontWeight: 800, paddingLeft: '40px'}}>
                                Sort By
                                <ExpandMoreIcon></ExpandMoreIcon>
                            </Typography>
                            <Typography style={{color: 'black', fontSize: '15px', fontFamily: 'Cinzel', fontWeight: 800, paddingLeft: '40px'}}>
                                <SearchIcon></SearchIcon>
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </div>
                <br></br>
                <div style={{margin: 'auto', width: '90%'}}>
                <Grid container spacing={9}  style={{paddingTop:'30px', width: '90%', margin: 'auto'}}>
                    <Grid container item xs={12} spacing={9}>
                        <FormRow />
                    </Grid>
                    <Grid container item xs={12} spacing={9}>
                        <FormRow />
                    </Grid>
                    <Grid container item xs={12} spacing={9}>
                        <FormRow />
                    </Grid>
                </Grid>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Catalog;