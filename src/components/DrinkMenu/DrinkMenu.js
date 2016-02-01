import React, { Component } from 'react';
import styles from './DrinkMenu.css';
import withStyles from '../../decorators/withStyles';
import slug from 'slug';
import ImageGallery from 'react-image-gallery';

import { menus } from '../../config';

const images = [
  {original:'/img/cocktails/10yearhunter.jpg'},
  {original:'/img/cocktails/coneyislandfakir.jpg'},
  {original:'/img/cocktails/eyeballkid.jpg'},
  {original:'/img/cocktails/fixedflight.jpg'},
  {original:'/img/cocktails/funnygame.jpg'},
];

@withStyles(styles)
class DrinkMenu extends Component {
  beerAndCider() {
    const sections = menus['Beer & Cider'];

    return sections.map((section) => {
      return (
        <div key={slug(section.name)} className="DrinkMenu-topLevel">
          <h3 className="DrinkMenu-topLevelTitle">{section.name}</h3>

          <ul className="DrinkMenu-topLevelItems">
            {section.items.map((item) => {
              return (
                <li key={slug(item.name)} className="DrinkMenu-topLevelItem">
                  <span className="DrinkMenu-topLevelItemName">{item.name}</span>
                  <span className="DrinkMenu-topLevelItemLocation">{item.location}</span>
                  <span className="DrinkMenu-topLevelItemPrice">{item.price}</span>
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
      <ul className="DrinkMenu-topLevelItems">
        {items.map((item) => {
          return (
            <li key={slug(item.name)} className="DrinkMenu-topLevelItem">
              <span className="DrinkMenu-topLevelItemName">{item.name}</span>
              <span className="DrinkMenu-topLevelItemPrice">{item.price}</span>
            </li>
          );
        })}
      </ul>
    );
  }

  genericMenuChunkWithSubsections(sections) {
    return sections.map((section) => {
      return (
        <div key={slug(section.name)} className="DrinkMenu-topLevel">
          <h3 className="DrinkMenu-topLevelTitle">{section.name}</h3>

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
      <div className="DrinkMenu-container">
        {beerAndCider}
        <hr />
        {wineAndChampagne}
        <hr />
        {blendedScotch}
        <ImageGallery
          items={images}
          autoPlay={true}
          slideInterval={4000}/>
      </div>
    );
  }

}

export default DrinkMenu;
