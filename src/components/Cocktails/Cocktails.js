import React, { Component } from 'react';
import styles from './Cocktails.css';
import withStyles from '../../decorators/withStyles';
// import Link from '../Link';

import { featuredCocktails } from '../../config';

@withStyles(styles)
class Cocktails extends Component {

  render() {
    return (
      <div class="Cocktails-listContainer">
        <ul class="Cocktails-list">
          <li class="Cocktails-listItem">
            <div class="Cocktails-imageContainer" data-cocktail-id={featuredCocktails[0].id}>
              <span class="Cocktails-name">{featuredCocktails[0].name}</span>
              <span class="Cocktails-ingredients">{featuredCocktails[0].description}</span>
            </div>
          </li>
        </ul>
      </div>
    );
  }

}

export default Cocktails;
