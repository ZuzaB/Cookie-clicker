require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let Image = require('../images/mine.png'),
    cookieImage = require('../images/cookie.png');

class Mine extends React.Component {

  render() {
    return (
      <div className="producers">
        <img className="producers-img" src={Image} alt="Mine Image" />
        <div>
          <h2 className="producers-header">Mine</h2>
            <img className="producers-cookie-img" src={cookieImage} alt="Cookie Image" />
            <span className="producers-price">&nbsp;&nbsp;12000</span>
        </div>
        <div className="producers-quantity">0</div>
      </div>
    );
  }
}

export default Mine;
