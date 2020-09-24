import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'left-auto',
        maxWidth: 600,
    },
    image: {
        width: 250,
        height: 250,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

const HotelRoom = (props) => {
    const { imgUrl, title, capacity, description, review, price } = props.room;
    const classes = useStyles();

    return (
        <div className="d-flex">
                <div className={classes.root}>
                    <Paper className={classes.paper}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <ButtonBase className={classes.image}>
                                    <img className={classes.img} alt="room-img" src={imgUrl} />
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1">
                                            {title}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            {capacity}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            {description}
                                        </Typography>
                                        <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                            {review}
                                        </Typography>
                                        <Typography variant="subtitle1">${price}/</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
         
        </div>
    );
};

export default HotelRoom;