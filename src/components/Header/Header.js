import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.scss';
import Link from '../react-scroll/lib/components/Link';
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
          <Link to="drinkmenu" href="#drinkmenu" className={s.actionLink} smooth={true} offset={50} duration={500}>View the selection</Link>
        </div>
        <div className={s.overlay}></div>
      </div>
    );
  }

}

export default withStyles(Header, s);
