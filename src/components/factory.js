require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let Image = require('../images/factory.png'),
    cookieImage = require('../images/cookie.png');

class Factory extends React.Component {

  render() {
    return (
      <div className="producers">
        <div className="producers-info">Each factory produces<br/> <strong>260</strong> cookies per second</div>
        <img className="producers-img" src={Image} alt="Factory Image" />
        <div>
          <h2 className="producers-header">Factory</h2>
            <img className="producers-cookie-img" src={cookieImage} alt="Cookie Image" />
            <span className="producers-price">&nbsp;&nbsp;13000</span>
        </div>
        <div className="producers-quantity">0</div>
      </div>
    );
  }
}

export default Factory;
