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
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image="https://4.bp.blogspot.com/-lgYgbTXPUmY/VLj10nLqPTI/AAAAAAAAHuk/XG4b8ZVXAnU/s1600/2014%2B-%2B11%2B297%2B-%2BTudela%2B%2B-%2BCasa%2BIba%C3%B1ez%2BLuna.JPG"
        title="Contrato casa 3"
      />
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          Casa Tudela
        </Typography>
        <Typography component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Detalles
        </Button>
        <Button size="small" color="primary">
         
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);