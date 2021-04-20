import React, { useEffect, useState } from "react";
import { Box, Grid, CardMedia, makeStyles, Paper } from "@material-ui/core";
import { useParams } from "react-router";
import ClassNames from "classnames";
import Male from "../../images/male.png";
import Female from "../../images/male.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbtack } from "@fortawesome/free-solid-svg-icons";
import { faFlag, faFutbol, faMars } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitterSquare,
  faYoutube,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#1a237e",
    height: "auto",
    padding: theme.spacing(2),
    flexGrow: 1,
  },
  icons: {
    marginTop: 30,
    marginLeft: 50,
    paddingBottom: 30,
    fontSize: 30
  },
  bannerBadge: {
    // display: "block",
    // justifyContent: "center",
    // borderRadius:20,
    width:"100%",
    margin:"auto"

  },
  bannerDynamic: {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100w",
    // height: "auto",
    height: 250,
    marginBottom: 5,
   
  },
  fanart: {
    width: "400px",
    height: "180px"
  },
  trophy: {
    marginLeft: "20px"
  },
  img: {
    height: "200px",
    width: "150px"
  },

  cardInfo: {
    width: "80%",
    margin: "auto",
    backgroundColor: theme.palette.primary.light,
    color: "white",
    borderRadius: 10
  },

  imgInfo: {
    height: "auto",
    width: "80%",
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
      <div className={classes.bannerBadge}>
        {/* <div className={classes.bannerDynamic}>
          <img className={classes.img} src={strBadge}></img> */}
          {/* <img
            className={ClassNames(classes.img, classes.fanart)}
            src={strFanart1}
          ></img>
          <img
            className={ClassNames(classes.img, classes.trophy)}
            src={strTrophy}
          ></img> */}
        {/* </div> */}
        <div
          className={classes.bannerDynamic}
          style={{ backgroundImage: `url(${strBanner})`  }}
        ></div>
      </div>
      <Grid
        className={classes.cardInfo}
        container
        spacing={2}
        direction="row"
        justify="center"
      >
        <Grid item sm={12} md={6}>
          <div display="flex" flexDirection="column" height="100%">
            <h4>{strLeague}</h4>
            <p>
              <FontAwesomeIcon color="#ff8f00" icon={faThumbtack} />
              Founded : {intFormedYear}
            </p>
            <p>
              <FontAwesomeIcon color="#ff8f00" icon={faFlag} />
              Country : {strCountry}
            </p>
            <p>
              <FontAwesomeIcon color="#ff8f00" icon={faFutbol} />
              Sport Type : {strSport}
            </p>
            <p>
              <FontAwesomeIcon color="#ff8f00" icon={faMars} />
              Gender : {strGender}
            </p>
          </div>
        </Grid>
        <Grid item sm={12} md={6}>
          <div>
            <img className={classes.imgInfo} src={genderImage} />
          </div>
        </Grid>
      </Grid>
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

      <Grid container direction="row" justify="center" display="flex">
        {/* <Grid item xs={12} md={4}> */}
        <div className={classes.icons}>
          <a href="https://twitter.com/">
            <FontAwesomeIcon color="white" icon={faTwitterSquare} />
          </a>
        </div>
        <div className={classes.icons}>
          <a href="https://www.youtube.com/">
            {" "}
            <FontAwesomeIcon color="white" icon={faYoutube} />
          </a>
        </div>
        <div className={classes.icons}>
          <a href="https://www.facebook.com/">
            {" "}
            <FontAwesomeIcon color="white" icon={faFacebook} />
          </a>
        </div>
        {/* </Grid> */}
      </Grid>
    </div>
  );
};

export default LeagueDetails;
