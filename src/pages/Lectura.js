import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import AddItem from '../components/newInput'

import TopBar from '../components/Lectura/LecturaTop.js'
import Disp1 from '../components/Lectura/dispositivo1.js'
import Disp2 from '../components/Lectura/disp2.js'
import Disp3 from '../components/Lectura/disp3.js'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  button:{
    marginTop: theme.spacing.unit*2,
    marginLeft:window.innerWidth*.42,
  }
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
    <TopBar/>
    
    <div className="card"><Disp1/></div>
    <div className="card"><Disp2/></div>
    <div className="card"><Disp3/></div>
  
    
    <Button variant="fab" color="primary" aria-label="Add" className={classes.button}>
        <AddItem/>
    </Button>
    <div className = "closingFooter"></div>
    <div className = "closingFooter"></div>
    
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);