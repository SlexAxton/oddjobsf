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
          <div className="Hero-centerLogo"></div>
          <div className="Hero-description">A cocktail-oriented bar focusing on thoughtfully crafted
            <br />libations that pay homage to classic methods and style.</div>
          <a className="Hero-actionLink" href="#cocktails">View the selection</a>
        </div>
        <div className="Hero-overlay"></div>
      </div>
    );
  }

}

export default Header;
