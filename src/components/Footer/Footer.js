import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.scss';
import Link from '../Link';

class Footer extends Component {

  render() {
    return (
      <div className={s.root}>
        <span className={s.text}>© Oddjob SF</span>
      </div>
    );
  }

}

export default withStyles(Footer, s);
