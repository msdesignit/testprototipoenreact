import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {BrowserRouter as Router} from 'react-router-dom';

import ConsumoTop from '../components/Consumo/ConsumoTop.js'
import Tabs from '../components/Consumo/tabs.js'
import CardConsumo from '../components/Consumo/CardConsumo'
import Alerts from '../components/Consumo/alerts'
import ListActions from '../components/Consumo/listActions'


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
    <Router>
    <div>
      <ConsumoTop/>
      <Tabs/>
    </div>
    </Router>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);