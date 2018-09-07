import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Snackbar from '@material-ui/core/Snackbar';

const action = (
  <Button color="secondary" size="small">
    VER
  </Button>
);

const styles = theme => ({
  snackbar: {
    marginBottom:0,
    margin: -25,
  },
});

function LongTextSnackbar(props) {
  const { classes } = props;

  return (
    <div className="snackbar">

        <SnackbarContent
          className={classes.snackbar}
          message="La factura de mayo ha sido enviada "
          action={action}
        />

        
      
    </div>
  );
}

LongTextSnackbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LongTextSnackbar);
