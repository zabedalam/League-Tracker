import React, { useEffect, useState } from "react";
import { Box, Grid, CardMedia, makeStyles, Paper } from "@material-ui/core";
import { useParams } from "react-router";
import Male from "../../images/male.png";
import Female from "../../images/male.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faYoutube,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#1a237e",
    // flexGrow: 1,
    height: "auto",
    padding: theme.spacing(2)
  },

  cardInfo: {
    display: "flex",
    // height: "auto",
    width: "80%",
    margin: "auto",
    justifyContent: "center",
    backgroundColor: theme.palette.primary.light,
    color: "white",
    borderRadius: 10
  },

  imgInfo: {
    // height: "auto",
    width: "70%",
    margin: 10
  }
}));
const LeagueDetails = () => {
  const { idLeague } = useParams();
  const [league, setLeague] = useState([]);
  const {
    strLeague,
    intFormedYear,
    strFanart1,
    strTrophy,
    strSport,
    strCountry,
    strBadge,
    strGender,
    strBanner,
    strDescriptionEN,
    strDescriptionFR
  } = league;
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setLeague(data.leagues[0]));
  }, [idLeague]);

  let genderImage;
  if (league.strGender === "Female") {
    genderImage = Female;
  } else {
    genderImage = Male;
  }

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box className={classes.cardInfo}>
        <Grid item xs={12} md={5}>
          <Box
            display="flex"
            flexDirection="column"
            //   justifyContent="space-between"
            height="100%"
          >
            <h4>{strLeague}</h4>
            <p>Founded:{intFormedYear}</p>
            <p>Country:{strCountry}</p>
            <p>Sport Type:{strSport}</p>
            <p>Gender:{strGender}</p>
          </Box>
        </Grid>
        <Grid xs={12} md={7}>
          <img className={classes.imgInfo} src={genderImage} />
        </Grid>
      </Box>
      <Box>
        <Grid item xs={12} md={12}>
          <Box
            display="flex"
            flexDirection="column"
            width="80%"
            margin="auto"
            justifyContent="center"
            color="white"
          >
            <p>{strDescriptionEN}</p>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            width="80%"
            margin="auto"
            justifyContent="center"
            color="white"
          >
            <p>{strDescriptionFR}</p>
          </Box>
        </Grid>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        width="100%"
        margin="auto"
        justifyContent="center"
        color="white"
      >
        <Grid item xs={12} md={12}>
          <Box>
            <a href="https://twitter.com/">
              <FontAwesomeIcon icon={faTwitterSquare} />
            </a>
          </Box>
          <Box>
            <a href="https://www.youtube.com/">
              {" "}
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </Box>
          <Box>
            <a href="https://www.facebook.com/">
              {" "}
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </Box>
        </Grid>
      </Box>
    </div>
  );
};

export default LeagueDetails;
