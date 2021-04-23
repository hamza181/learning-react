// import './App.css';
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, TextField, Button } from "@material-ui/core";
import NavBar from "./NavBar";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {},
  },

  paper: {
    width: 400,
    margin: "0 auto",
    marginTop: 50,
    textAlign: "center",
    padding: 15,
  },

  input: {
    width: "98%",
    marginBottom: 10,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar />

      <Paper elevation={3} className={classes.paper}>
        <h1>Login</h1>

        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" label="Enter Email" className={classes.input} />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" label="Enter Password" className={classes.input} />
          <Button variant="contained" color="primary" className={classes.input}>
            Login
          </Button>
        </form>
      </Paper>
    </div>
  );
}

export default App;
