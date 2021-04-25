import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    margin: "0 auto",
    marginTop: 50,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  title:{
      color: '#3f51b5',
  }
}));

export default function InfoPanel() {
  const [globalData, setGlobalData] = useState({});
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://api.apify.com/v2/key-value-stores/QhfG8Kj6tVYMgud6R/records/LATEST?disableRedirect=true"
      );
      let data = await response.json();
      delete data.sourceUrl;
      delete data.lastUpdatedAtApify;
      delete data.lastUpdatedAtSource;
      delete data.readMe;
      setGlobalData(data);
      console.log(data);
    }
    getData();
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {/* Object.keys Api k object ki sari keys le kar ae ga  */}
        {/* ind hamara index ha */}
        {Object.keys(globalData).map((key, ind) => {
          return (
            <Grid item xs={12} sm={4} key={ind}>
              <Paper className={classes.paper} elevation={3}>
                {/* agar beech ma kahi _ ae to space se replace kar do aur upper case kar do */}
                <h3 className={classes.title}>{key.replace(/_/g, " ").toUpperCase()}</h3>
                <h3>{globalData[key]}</h3>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
