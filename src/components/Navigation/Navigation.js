/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.scss';
import Link from '../Link';

class Navigation extends Component {

  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (
      <div className={cx(s.root, this.props.className)} role="navigation">
        <a className={s.logo} href="/" onClick={Link.handleClick}>Oddjob</a>

        <ul className={s.linkGroup}>
          <li><a className={s.link} href="#cocktails">Cocktails</a></li>
          <li><a className={s.link} href="#events">Events</a></li>
          <li><a className={s.link} href="#contact">Contact</a></li>
        </ul>

        <div className={s.infoGroup}>
          <a className={s.address} href="https://goo.gl/maps/U2A6AH3YpKx" target="_blank">1337 Mission St, San Francisco, CA</a>
          <span className={s.openNotice}><strong>Open Now</strong> until 2am</span>
        </div>
      </div>
    );
  }

}

export default withStyles(Navigation, s);
