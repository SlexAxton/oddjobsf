import React, { PropTypes, Component } from 'react';
import styles from './App.css';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import Header from '../Header';
import Cocktails from '../Cocktails';
import Footer from '../Footer';

@withContext
@withStyles(styles)
class App extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
    error: PropTypes.object,
  };

  render() {
    return !this.props.error ? (
      <div className="oddjob-yo">
        <Header />
        <Cocktails />
        {this.props.children}
        <Footer />
      </div>
    ) : this.props.children;
  }

}

export default App;
