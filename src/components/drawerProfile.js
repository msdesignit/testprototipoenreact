import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Profile from './Yo/profile.js'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import white from '@material-ui/core/colors/green';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Avatar from './Avatar';

const theme = createMuiTheme({

});

const styles = {
  list: {
    width: 250,
    
  },
  fullList: {
    width: 'auto',
  },
  AccountCircle:{
    colorNative: 'white',
  }
};

class TemporaryDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    

    const fullList = (
      <div className="profScreen" className={classes.fullList}>
        <Profile/>
      </div>
    );

    return (
      <div>
     
        <Button  onClick={this.toggleDrawer('bottom', true)} >
          <div className="iconProf"><Avatar/></div>
        </Button>
      
        <Drawer
          anchor="bottom"
          open={this.state.bottom}
          onClose={this.toggleDrawer('bottom', false)}
        >
          <div
            tabIndex={0}
            role="button"
            
          >
            {fullList}
          </div>
        </Drawer>
        
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);