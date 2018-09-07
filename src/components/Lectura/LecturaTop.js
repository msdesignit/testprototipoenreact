import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import DrawerProfile from '../drawerProfile'

const styles = {
  root: {
    flexGrow: 1,
    marginLeft:10,
  },
  flex: {
    flexGrow: 1,
    color:'#000000',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);
        const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#000000',
        main: '#ffffff', //main color seleccionado
        dark: '#000000',
        contrastText: '#000000',

      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },

    },
    shadows: ["none"],
    typography: {

    // Use the system font instead of the default Roboto font.
      fontFamily: [
        '"Helvetica Neue"',
        ].join(','),
      title:{
        fontSize:30,
        fontWeight: 'bold',
      },
      colorPrimary:{
        main:'#000000',
      },
    },


    });

    return (
      <div className="header">
      <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <AppBar position="static" >
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Lectura
            </Typography>
            {auth && (
              <div>

             
              <DrawerProfile/>
             
              </div>
            )}
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
      </div>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);