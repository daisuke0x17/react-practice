import { AppBar, Toolbar, Typography, Button, makeStyles } from "@material-ui/core";
import React from 'react'

const useStyle = makeStyles((theme) => ({
    header:{
        display: "flex",
    },
    appBar:{
        padding: theme.spacing(1),
        background: "#39284f",
        marginBottom: theme.spacing(13),
    },
    headerTitle:{
        fontSize: "34px",
        flexGrow: 1,
    },
}));

const Header = () => {
    const classes = useStyle();
  return (
    <div className={classes.header}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h1" className={classes.headerTitle}>Fortnite API</Typography>
          <Button color="inherit" href="#">Github</Button>
          <Button color="inherit" href="#">API</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
