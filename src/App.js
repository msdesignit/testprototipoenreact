import React, { Component } from 'react'
import NavigationBar from './components/bottomNav'
import {BrowserRouter as Router} from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

import Main from './Main'

class App extends Component {
  render() {
    const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#000000',
        main: '#80cbc4',
        dark: '#000000',
        contrastText: '#000000',

      },
      secondary: {
        main: '#B2DFDB',
      },

    },

    typography: {

    // Use the system font instead of the default Roboto font.
      fontFamily: [
        '"Helvetica Neue"',
        ].join(','),
      title:{
        fontSize:34,
        fontWeight: 'bold',
      },
      headline:{
        fontSize:16,
      },
      
    },

    });
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <div className="app">
            <div className = "MainControls">
              <Main/>
            </div>
            <div className = "footer"><NavigationBar/></div>
          </div>
        </MuiThemeProvider>
      </Router>
      
    )
  }
}
export default App

