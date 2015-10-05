import React, { Component } from 'react';
import styles from './Header.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';
import Navigation from '../Navigation';

@withStyles(styles)
class Header extends Component {

  render() {
    return (
      <div className="Hero">
        <div className="Hero-content">
          <Navigation />
        </div>
        <div className="Hero-overlay"></div>
      </div>
    );
  }

}

export default Header;
