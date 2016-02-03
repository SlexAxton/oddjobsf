import React, { Component, PropTypes } from 'react';
import { googleAnalyticsId } from '../../config';

class Html extends Component {

  static propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    canonicalUrl: PropTypes.string,
    css: PropTypes.string,
    body: PropTypes.string.isRequired,
    entry: PropTypes.string.isRequired,
  };

  static defaultProps = {
    title: '',
    description: '',
  };

  trackingCode() {
    return ({ __html:
      `(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=` +
      `function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;` +
      `e=o.createElement(i);r=o.getElementsByTagName(i)[0];` +
      `e.src='https://www.google-analytics.com/analytics.js';` +
      `r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));` +
      `ga('create','${googleAnalyticsId}','auto');ga('send','pageview');`,
    });
  }

  render() {
    return (
      <html className="no-js" lang="en-US" prefix="og: http://ogp.me/ns#" itemScope itemType="http://schema.org/WebPage">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta property="og:title" content={this.props.title} />
        <meta property="og:url" content={this.props.canonicalUrl} />
        <meta property="og:type" content="website" />
        { /*<meta property="og:image" content="" />*/ }
        <meta property="og:description" content={this.props.description} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content={this.props.title} />
        <meta name="twitter:title" content={this.props.title} />
        <meta name="twitter:url" content={this.props.canonicalUrl} />
        <meta name="twitter:card" content="summary"/>
        <meta name="description" content={this.props.description} />
        <title>{this.props.title}</title>
        <meta name="description" content={this.props.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        { /*<link rel="apple-touch-icon" href="apple-touch-icon.png" />*/ }
        <style id="css" dangerouslySetInnerHTML={{ __html: this.props.css }} />
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: this.props.body }} />
        <script src={this.props.entry} async="true"></script>
        <script dangerouslySetInnerHTML={this.trackingCode()} />
      </body>
      </html>
    );
  }

}

export default Html;
