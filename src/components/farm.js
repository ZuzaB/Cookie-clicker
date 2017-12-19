require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let Image = require('../images/farm.png'),
    cookieImage = require('../images/cookie.png');

class Farm extends React.Component {

  render() {
    return (
      <div className="producers">
        <div className="producers-info">Each farm produces<br/><strong>8</strong> cookies per second</div>
        <img className="producers-img" src={Image} alt="Farm Image" />
        <div>
          <h2 className="producers-header">Farm</h2>
            <img className="producers-cookie-img" src={cookieImage} alt="Cookie Image" />
            <span className="producers-price">&nbsp;&nbsp;1100</span>
        </div>
        <div className="producers-quantity">0</div>
      </div>
    );
  }
}

export default Farm;
