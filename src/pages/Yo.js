import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Switches from '../components/Switches'
import Data from '../components/text'
import TopBar from '../components/Yo/topBar'

import Card from '../components/Yo/card.js'
import Contract2 from '../components/Yo/contract2.js'
import Contract3 from '../components/Yo/contract3.js'


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
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
      <TopBar/>

      <div className = "card"><Card/></div>
      <div className = "card"><Contract2/></div>
      <div className = "card"><Contract3/></div>
      <div className = "closingFooter"></div>
    </div>

  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);