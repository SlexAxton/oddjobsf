import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './DrinkMenu.scss';
import slug from 'slug';
import ScrollableElement from '../react-scroll/lib/components/Element';

import { menus } from '../../config';

class DrinkMenu extends Component {

  static propTypes = {
    className: PropTypes.string,
  };

  beerAndCider() {
    const sections = menus['Beer & Cider'];

    return sections.map((section) => {
      return (
        <div key={slug(section.name)} className={s.topLevel}>
          <h3 className={s.topLevelTitle}>{section.name}</h3>

          <ul className={s.topLevelItems}>
            {section.items.map((item) => {
              return (
                <li key={slug(item.name)} className={s.topLevelItem}>
                  <span className={s.topLevelItemName}>{item.name}</span>
                  <span className={s.topLevelItemLocation}>{item.location}</span>
                  <span className={s.topLevelItemPrice}>{item.price}</span>
                </li>
              );
            })}
          </ul>
        </div>
      );
    });
  }

  genericMenuChunk(items) {
    return (
      <ul className={s.topLevelItems}>
        {items.map((item) => {
          return (
            <li key={slug(item.name)} className={s.topLevelItem}>
              <span className={s.topLevelItemName}>{item.name}</span>
              <span className={s.topLevelItemPrice}>{item.price}</span>
            </li>
          );
        })}
      </ul>
    );
  }

  genericMenuChunkWithSubsections(sections) {
    return sections.map((section) => {
      return (
        <div key={slug(section.name)} className={s.topLevel}>
          <h3 className={s.topLevelTitle}>{section.name}</h3>

          {this.genericMenuChunk(section.items)}
        </div>
      );
    });
  }

  render() {
    const beerAndCider = this.beerAndCider();
    const wineAndChampagne = this.genericMenuChunkWithSubsections(menus['Wine & Champagne']);
    const blendedScotch = this.genericMenuChunk(menus['Blended Scotch']);

    return (
      <ScrollableElement className={cx(s.root, this.props.className)} name="drinkmenu">
        {beerAndCider}
        <hr />
        {wineAndChampagne}
        <hr />
        {blendedScotch}
      </ScrollableElement>
    );
  }
}

export default withStyles(DrinkMenu, s);
