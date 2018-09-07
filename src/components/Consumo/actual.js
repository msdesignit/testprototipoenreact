import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Tabs from './tabs.js'
import CardConsumoConjunto from './cardConsumoConjunto'
import Alerts from './alerts'
import ListActions from './listActions'
import ListPlans from './ListPlans'
import Plan1 from './plan1'

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
      <div className="cardConsumo"><CardConsumoConjunto/></div>
      <div className="cardConsumo"><ListPlans/></div>

      <div className=""><Alerts/></div>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);