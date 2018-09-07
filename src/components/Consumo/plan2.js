import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: window.innerWidth,
    maxHeight: 154,
    display:'flex',

  },
  image:{
    width:96,
    objectFit: 'cover',

  },
  media: {
    // ⚠️ object-fit is not supported by IE11.
    objectFit: 'cover',
  },
};

function ImgMediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        className={classes.image}
        image="https://www.iberdrola.es/webclipb/gc/prod/es_ES/planes/html/plan_verano_superior_res/img_ficha_plan-verano_desktop.jpg"
        title="PlanEstable"
      />
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          Plan Verano
        </Typography>
        <Typography component="p">
          Lizards are a widespread group
        </Typography>
      </CardContent>
    </Card>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);
