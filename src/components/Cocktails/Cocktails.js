import React, { Component } from 'react';
import styles from './Cocktails.css';
import withStyles from '../../decorators/withStyles';
import slug from 'slug';

import { featuredCocktails } from '../../config';

@withStyles(styles)
class Cocktails extends Component {

  imageStyle(cocktail) {
    return `url(/img/${cocktail.imageSrc})`;
  }

  render() {
    const largeIdxs = [0,1,2,7,8,9];
    const cocktails = featuredCocktails.map((cocktail, idx) => {
      const itemClassNames = ['Cocktail-listItem'];
      if (largeIdxs.indexOf(idx) >= 0) {
        itemClassNames.push('Cocktail-listItem--large');
      }
      const itemClassName = itemClassNames.join(' ');

      const offsetPercentageY = cocktail.offsetPercentageY ? `${cocktail.offsetPercentageY}%` : '50%';

      return (
        <li key={slug(cocktail.name)} className={itemClassName}>
          <div className="Cocktail-imageContainer" style={{backgroundImage: this.imageStyle(cocktail), backgroundPositionY: offsetPercentageY}}>
            <div className="Cocktail-text">
              <span className="Cocktail-name">{cocktail.name}</span>
              <span className="Cocktail-ingredients">{cocktail.description}</span>
            </div>
          </div>
        </li>
      );
    });

    return (
      <div id="cocktails" className="Cocktail-listContainer">
        <ul className="Cocktail-list">
          {cocktails}
        </ul>
      </div>
    );
  }

}

export default Cocktails;
