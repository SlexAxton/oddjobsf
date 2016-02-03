/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.scss';
import Link from '../Link';
import Navigation from '../Navigation';

class Header extends Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.content}>
          <Navigation />
          <div className={s.centerLogo}></div>
          <div className={s.description}>A cocktail-oriented bar focusing on thoughtfully crafted
            libations that pay homage to classic methods and style.</div>
          <a className={s.actionLink} href="#cocktails">View the selection</a>
        </div>
        <div className={s.overlay}></div>
      </div>
    );
  }

}

export default withStyles(Header, s);
