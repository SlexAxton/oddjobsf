import React, { PropTypes, Component } from 'react';
import classNames from 'classnames';
import styles from './Navigation.css';
import withStyles from '../../decorators/withStyles';
import Link from '../Link';

@withStyles(styles)
class Navigation extends Component {

  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (
      <div className={classNames(this.props.className, 'Navigation')} role="navigation">
        <a className="Navigation-logo" href="/" onClick={Link.handleClick}>Oddjob</a>

        <ul className="Navigation-linkGroup">
          <li><a className="Navigation-link" href="#cocktails">Cocktails</a></li>
          <li><a className="Navigation-link" href="#events">Events</a></li>
          <li><a className="Navigation-link" href="#contact">Contact</a></li>
        </ul>

        <div className="Navigation-infoGroup">
          <a className="Navigation-address" href="https://goo.gl/maps/U2A6AH3YpKx">1337 Mission St, San Francisco, CA</a>
          <span className="Navigation-phoneNumber">650-787-2432</span>
        </div>
      </div>
    );
  }

}

export default Navigation;
