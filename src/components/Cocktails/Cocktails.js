import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Cocktails.scss';
import slug from 'slug';
import ScrollableElement from '../react-scroll/lib/components/Element';

import { featuredCocktails } from '../../config';

class Cocktails extends Component {

  static propTypes = {
    className: PropTypes.string,
  };

  imageStyle(cocktail) {
    return `url(/img/${cocktail.imageSrc})`;
  }

  render() {
    const largeIdxs = [0,1,2,7,8,9];
    const cocktails = featuredCocktails.map((cocktail, idx) => {
      const itemClassNames = [s.listItem];
      if (largeIdxs.indexOf(idx) >= 0) {
        itemClassNames.push(s.listItem__large);
      }
      const itemClassName = itemClassNames.join(' ');

      const offsetPercentageY = cocktail.offsetPercentageY ? `${cocktail.offsetPercentageY}%` : '50%';

      return (
        <li key={slug(cocktail.name)} className={itemClassName}>
          <div className={s.imageContainer} style={{backgroundImage: this.imageStyle(cocktail), backgroundPositionY: offsetPercentageY}}>
            <div className={s.text}>
              <span className={s.name}>{cocktail.name}</span>
              <span className={s.ingredients}>{cocktail.description}</span>
            </div>
          </div>
        </li>
      );
    });

    return (
      <ScrollableElement className={cx(s.root, this.props.className)} name="cocktails">
        <ul className={s.list}>
          {cocktails}
        </ul>
      </ScrollableElement>
    );
  }

}

export default withStyles(Cocktails, s);
