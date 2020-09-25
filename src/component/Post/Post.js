import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import './Post.css';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 330,
    margin: 12,
    textAlign:"center",
    height: 460,
  },
  media: {
    height: 340,
    width: 400,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));


const Post = (props) => {
  
  const {destination, img, key }= props.place;

  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          title={destination}
        />
        <CardMedia
          className={classes.media}
          image={img}
        />
       <Link className="detail-link"  to={"/place/"+ key}>Details</Link>
      </Card>
    </div>
  );
};

export default Post;