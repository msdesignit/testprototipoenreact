import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import AddIcon from '@material-ui/icons/Add';
import AddLectura from './addLectura';

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
      
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          Contador de Gas
        </Typography>
        <Typography component="p">
          Fecha última lectura: 14/05/2018
        </Typography>

        <TextField
          id="Última lectura"
          label="Última lectura"
          defaultValue="13120281312039"
          className={classes.textField}
          margin="normal"
        />

      

      </CardContent>

      <CardActions>
        <Button size="small" color="primary" >
          <AddLectura/>
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