require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let cookieImage = require('../images/cookie.png');

class Cookie extends React.Component {

  render() {
    return (
      <div className="cookie">
        <img className="cookie-img" src={cookieImage} alt="Cookie Image" />
      </div>
    );
  }
}

export default Cookie;
