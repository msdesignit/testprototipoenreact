import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Switches from '../Switches'
import Data from '../text'
import TopBar from './topBar'
import Card from './card.js'
import Contract2 from './contract2.js'
import Contract3 from './contract3.js'




const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,


  },
  raise:{
    height:window.innerHeight*.88,
  },
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div className = {classes.raise}>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          Yo
        </Typography>
        <Typography component="p">
          Mis datos personales
        </Typography>
        <Data/>
      </Paper>

      <Paper className={classes.root} elevation={1}>
      <Typography variant="headline" component="h3">
         Preferencias
      </Typography>
        <Switches/>
      </Paper>

    </div>

  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);