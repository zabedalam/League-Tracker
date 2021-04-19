import React, { useEffect,useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom"
const useStyles = makeStyles({
    root: {
    //   maxWidth: 400,
    },
    media: {
      height: 140,
      width:"auto",
    //   padding:2
    // paddingTop:25,
    margin:5,
    // padding:5
    
    },
  });
const Leagues = (props) => {
const {strLeague,strSport,idLeague}=props.league
    const [league,setLeague]=useState([])

    useEffect(()=>{
        const url=`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setLeague(data.leagues[0]))
    },[idLeague])
    const {strLogo}=league
    const classes = useStyles();
    return (
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
        
        image={strLogo}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {strLeague}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Sports Type: {strSport}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Link to={`/leagues/${idLeague}`}>Explore</Link>
        </Button>
        
      </CardActions>
    </Card>
    );
};

export default Leagues;