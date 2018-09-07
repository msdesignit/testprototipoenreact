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
import EstadoFactura from './EstadoFactura'
import IconButton from '@material-ui/core/IconButton';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowRight from '@material-ui/icons/KeyboardArrowRight';

const styles = {
  card: {
    maxWidth: window.innerWidth,
    height:162,
  },
  media: {
    height: 140,
  },
  factura:{
    height:160,
  },
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      
      <CardContent>
      <Typography component="p">
          Desde el 15/05/2018
        </Typography>
        <div className= "containerConsumo">
            <div>85,75€</div>
            <IconButton aria-label="Details">
              <div className="goDetails"><ArrowRight /></div>
            </IconButton>
        </div>
      </CardContent>
      <CardActions>
      </CardActions>
     <div className="estadoFactura">
     <span className="dot"></span>
          Factura enviada
    </div>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);