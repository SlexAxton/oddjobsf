import React, { Component } from 'react';
import styles from './Cocktails.css';
import withStyles from '../../decorators/withStyles';
// import Link from '../Link';

import { featuredCocktails } from '../../config';

@withStyles(styles)
class Cocktails extends Component {

  imageStyle(cocktail) {
    return `url(/img/${cocktail.imageSrc})`;
  }

  render() {
    const largeIdxs = [0,1,2,3];
    const cocktails = featuredCocktails.map((cocktail, idx) => {
      let itemClassName = 'Cocktail-listItem';
      if (largeIdxs.indexOf(idx) >= 0) {
        itemClassName += ' Cocktail-listItem--large';
      }
      return (
        <li className={itemClassName}>
          <div className="Cocktail-imageContainer" style={{backgroundImage: this.imageStyle(cocktail)}}>
            <div className="Cocktail-text">
              <span className="Cocktail-name">{cocktail.name}</span>
              <span className="Cocktail-ingredients">{cocktail.description}</span>
            </div>
          </div>
        </li>
      );
    });

    return (
      <div className="Cocktail-listContainer">
        <ul className="Cocktail-list">
          {cocktails}
        </ul>
      </div>
    );
  }

}

export default Cocktails;
