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

  genericMenuList(items) {
    return (
      <ul className={s.topLevelItems}>
        {items.map((item) => {
          return (
            <li key={slug(item.name)} className={s.topLevelItem}>
              <span className={s.topLevelItemName}>{item.name}</span>
              {item.location ? (<span className={s.topLevelItemLocation}>{item.location}</span>) : null}
              <span className={s.topLevelItemPrice}>{item.price}</span>
            </li>
          );
        })}
      </ul>
    );
  }

  genericMenuChunk(items, sectionName) {
    return (
      <div key={slug(sectionName)} className={s.topLevel}>
        <h4 className={s.topLevelTitle}>{sectionName}</h4>

        {this.genericMenuList(items)}
      </div>
    );
  }

  genericMenuChunkWithSubsections(sections, sectionName) {
    sectionName = sectionName || sections.name;

    return (
      <div key={slug(sectionName)} className={s.topLevelGroup}>
        <h3 className={s.topLevelGroupTitle}>{sectionName}</h3>

        {sections.map((section) => {
          return this.genericMenuChunk(section.items, section.name);
        })}
      </div>
    );
  }

  render() {
    const beerAndCider = this.genericMenuChunkWithSubsections(menus['Beer & Cider'], 'Beer & Cider');
    const wineAndChampagne = this.genericMenuChunkWithSubsections(menus['Wine & Champagne'], 'Wine & Champagne');
    const blendedScotch = this.genericMenuChunk(menus['Blended Scotch'], 'Blended Scotch');
    const bourbonAndRye = this.genericMenuChunk(menus['Bourbon & Rye Whiskey'], 'Bourbon & Rye Whiskey');
    const nonAlcoholic = this.genericMenuChunk(menus['Non Alcoholic'], 'Non Alcoholic');
    const nonAlcoholicCocktails = this.genericMenuChunk(menus['Non-Alcoholic Cocktails'], 'Non-Alcoholic Cocktails');
    const otherSpirits = this.genericMenuChunkWithSubsections(menus['Other Spirits'], 'Other Spirits');
    const singleMalt = this.genericMenuChunkWithSubsections(menus['Single Malt Whisky'], 'Single Malt Whisky');

    return (
      <ScrollableElement className={cx(s.root, this.props.className)} name="drinkmenu">
        {beerAndCider}
        {singleMalt}
        {blendedScotch}
        {bourbonAndRye}
        {otherSpirits}
        {wineAndChampagne}
        {nonAlcoholicCocktails}
        {nonAlcoholic}
      </ScrollableElement>
    );
  }
}

export default withStyles(DrinkMenu, s);
