/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component } from 'react';
import styles from './Footer.css';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        Footer
      </div>
    );
  }

}

export default Footer;
