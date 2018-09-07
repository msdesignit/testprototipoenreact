import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Actual from './actual.js'
import Anterior from './anterior.js'
import Futuro from './futuro.js'

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: window.innerWidth,
    margin:'auto',
    fontSize:14,
  },
});

class FullWidthTabs extends React.Component {
  state = {
    value: 1,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    const themeL = createMuiTheme({
    palette: {
      primary: {
        light: '#000000',
        main: '#ffffff', //main color seleccionado
        dark: '#000000',
        contrastText: '#000000',

      },
      secondary: {
        main: '#80CBC4',
      },

    },
    
    typography: {

    // Use the system font instead of the default Roboto font.
      fontFamily: [
        '"Helvetica Neue"',
        ].join(','),
      
      colorPrimary:{
        main:'#000000',
      },
    },
    });

    


    return (
      <MuiThemeProvider theme={themeL}>
      <div className={classes.root}>
        <AppBar position="static"  color="primary">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="secondary"
            textColor="secondary"

            fullWidth
          >
            <Tab label="Anterior" />
            <Tab label="Actual" />
            <Tab label="Futuro" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}><Anterior/></TabContainer>
          <TabContainer dir={theme.direction}><Actual/></TabContainer>
          <TabContainer dir={theme.direction}><Futuro/></TabContainer>
        </SwipeableViews>
      </div>
      </MuiThemeProvider>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);

