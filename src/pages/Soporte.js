import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


import PaperCard from '../components/Paper'
import TopBar from '../components/Soporte/SoporteTop'
import ListInfo from '../components/ListInfo'

import Card from '../components/Soporte/incidencia.js'
import Contract2 from '../components/Soporte/instalacion.js'


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
      <TopBar/>
      
      <div className = "card"><Card/></div>
      <div className = "card"><Contract2/></div>
       <ListInfo/>
       <div className = "closingFooter"></div>
      <div className = "closingFooter"></div>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);