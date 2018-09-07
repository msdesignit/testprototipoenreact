import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Plan1 from './plan1.js';
import Plan2 from './plan2.js';

const styles = {
  cards: {
    Width: window.innerWidth,

    maxHeight: 154,
    display:'flex',

  },

};

function ImgMediaCard(props) {
  const { classes } = props;
  return (
    <div className={classes.cards}>
      <div className = "carouselPlans"><Plan1/></div>
      <div className = "carouselPlans"><Plan2/></div>
    </div>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);
