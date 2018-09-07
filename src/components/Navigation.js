import React from 'react';
import {withRouter, Link} from 'react-router';
import Lectura from './Lectura'


class Navigation extends React.PureComponent {
  render(){

    const{params}= this.props;
    return(
      <ul className='pure-menu-list'>
        <li className='pure-menu-item'>
          <a href = '#' className = 'pure-menu-link'> Organizations</a>
        </li>
      </ul>
      );
  }
}

export default Navigation;