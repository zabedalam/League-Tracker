import React, { useEffect, useState } from "react";
import Leagues from "../leagues/Leagues";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardHeader
} from "@material-ui/core/";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.main
  },
  banner: {
    height: 250,
    marginBottom: 50
  }
}));

const Home = () => {
  const classes = useStyles();
  const [leagues, setLeagues] = useState([]);
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`;
    fetch(url)
      .then(res => res.json())
      .then(data => setLeagues(data.leagues.slice(1, 100)));
  }, []);
  console.log("leagues", leagues);
  return (
    <div className={classes.root}>
      <div
        className={classes.banner}
        style={{
          backgroundImage: `url("http://www.f-covers.com/cover/european-football-facebook-cover-timeline-banner-for-fb.jpg")`
        }}
      ></div>
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {leagues.map(league => (
          <Grid item xs={12} sm={6} md={4}>
            <Leagues league={league}></Leagues>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
