import React, { Component, PropTypes } from 'react';
import emptyFunction from 'fbjs/lib/emptyFunction';
import s from './App.scss';
import Header from '../Header';
import Footer from '../Footer';
import Cocktails from '../Cocktails';
import DrinkMenu from '../DrinkMenu';

import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: '/img/gallery/gallery_0.jpg',
    thumbnail: '/img/gallery/thumbs/gallery_0.jpg',
  },
  {
    original: '/img/gallery/gallery_1.jpg',
    thumbnail: '/img/gallery/thumbs/gallery_1.jpg',
  },
  {
    original: '/img/gallery/gallery_2.jpg',
    thumbnail: '/img/gallery/thumbs/gallery_2.jpg',
  },
  {
    original: '/img/gallery/gallery_3.jpg',
    thumbnail: '/img/gallery/thumbs/gallery_3.jpg',
  },
  {
    original: '/img/gallery/gallery_4.jpg',
    thumbnail: '/img/gallery/thumbs/gallery_4.jpg',
  },
  {
    original: '/img/gallery/gallery_5.jpg',
    thumbnail: '/img/gallery/thumbs/gallery_5.jpg',
  },
];

class App extends Component {

  static propTypes = {
    context: PropTypes.shape({
      insertCss: PropTypes.func,
      onSetTitle: PropTypes.func,
      onSetMeta: PropTypes.func,
      onPageNotFound: PropTypes.func,
    }),
    children: PropTypes.element.isRequired,
    error: PropTypes.object,
  };

  static childContextTypes = {
    insertCss: PropTypes.func.isRequired,
    onSetTitle: PropTypes.func.isRequired,
    onSetMeta: PropTypes.func.isRequired,
    onPageNotFound: PropTypes.func.isRequired,
  };

  getChildContext() {
    const context = this.props.context;
    return {
      insertCss: context.insertCss || emptyFunction,
      onSetTitle: context.onSetTitle || emptyFunction,
      onSetMeta: context.onSetMeta || emptyFunction,
      onPageNotFound: context.onPageNotFound || emptyFunction,
    };
  }

  componentWillMount() {
    this.removeCss = this.props.context.insertCss(s);
  }

  componentWillUnmount() {
    this.removeCss();
  }

  render() {
    return !this.props.error ? (
      <div>
        <Header />
        <div id="content-container">
          <Cocktails />
          <DrinkMenu />
          <div id="oddjob-gallery">
            <ImageGallery
                items={images}
                autoPlay={true}
                server={true}
                slideInterval={8000} />
          </div>
        </div>
        <Footer />
      </div>
    ) : this.props.children;
  }

}

export default App;
