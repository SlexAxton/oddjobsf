import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import ImageGallery from 'react-image-gallery';
import s from './ContentPage.scss';

var images = [
  {
    original: '/img/cocktails/10yearhunter.jpg',
    thumbnail: '/img/cocktails/10yearhunter.jpg',
  },
  {
    original: '/img/cocktails/coneyislandfakir.jpg',
    thumbnail: '/img/cocktails/coneyislandfakir.jpg',
  },
  {
    original: '/img/cocktails/fixedflight.jpg',
    thumbnail: '/img/cocktails/fixedflight.jpg',
  }
];

class ContentPage extends Component {

  static propTypes = {
    path: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    title: PropTypes.string,
  };

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    this.context.onSetTitle(this.props.title);
    return (
      <div className={s.root}>
        <div className={s.container}>
          {this.props.path === '/' ? null : <h1>{this.props.title}</h1>}
          <div dangerouslySetInnerHTML={{ __html: this.props.content || '' }} />
          <ImageGallery
            items={images}
            autoPlay={true}
            server={true}
            slideInterval={8000} />
        </div>
      </div>
    );
  }

}

export default withStyles(ContentPage, s);
