import React from 'react';
import { useParams } from 'react-router-dom';
import CalenderDate from '../CalenderDate/CalenderDate';
import { travelPlaces } from '../Home/Home';
import './PostDetails.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});



const PostDetails = () => {
    const classes = useStyles();
    const { placeKey } = useParams();
    const post = travelPlaces.find(a => a.key === placeKey)

    return (

        <div className="container d-flex">
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h3" component="h2">
                            {post.destination}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                           {post.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>

            </Card>

            <div className="calender col-md-6 ml-5">
                <CalenderDate></CalenderDate>
            </div>
        </div>

    );
};

export default PostDetails;