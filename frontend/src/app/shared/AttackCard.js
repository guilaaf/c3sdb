import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, CardActions, Typography, Fab } from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
    fab: {
        float: 'right',
        top: theme.spacing(-5.5),
        right: theme.spacing(-1),
    },
});

class AttackCard extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <Card raised={3}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image="https://cocbases.com/wp-content/uploads/2-8.jpg"
                        title="Base layout"
                    />
                    <CardContent>
                        <Fab className={classes.fab} color="primary" aria-label="See on YouTube" href="https://www.youtube.com/watch?v=-DZtR0tMla0&t=2139s">
                            <YouTubeIcon />
                        </Fab>
                        <Typography gutterBottom variant="h5" >
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}

AttackCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AttackCard);