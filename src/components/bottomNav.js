import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import ImportExport from '@material-ui/icons/ImportExport';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PieChart from '@material-ui/icons/PieChart';
import ContactSupport from '@material-ui/icons/ContactSupport';

import { Link } from 'react-router-dom';

const styles = {
  root: {
    width: window.innerWidth,
    fontSize:8,
  },

};

class LabelBottomNavigation extends React.Component {
  state = {
    value: 'consumo',
  };


  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#000000',
        main: '#007aff', //main color seleccionado
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



    });
    const { classes } = this.props;
    const { value } = this.state;
    console.log(value);
    return (
      <MuiThemeProvider theme={theme}>
      <BottomNavigation value={value} onChange={this.handleChange} showLabels className={classes.root}  > 
        <BottomNavigationAction label="Yo" value="yo" icon={<AccountCircle />} component={Link} to={"/Yo"}/>
        <BottomNavigationAction label="Lectura" value="lectura" icon={<ImportExport />} component={Link} to={"/Lectura"}/>
        <BottomNavigationAction label="Consumo" value="consumo" icon={<PieChart />} component={Link} to={"/Consumo"} />
        <BottomNavigationAction label="Soporte" value="soporte" icon={<ContactSupport />} component={Link} to={"/Soporte"}/>
      </BottomNavigation>
      </MuiThemeProvider>
    );
  }
}

LabelBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LabelBottomNavigation);