require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let Image = require('../images/grandma.png'),
    cookieImage = require('../images/cookie.png');

class Grandma extends React.Component {

  render() {
    return (
      <div className="producers">
        <img className="producers-img" src={Image} alt="Grandma Image" />
        <div>
          <h2 className="producers-header">Grandma</h2>
            <img className="producers-cookie-img" src={cookieImage} alt="Cookie Image" />
            <span className="producers-price">&nbsp;&nbsp;100</span>
        </div>
        <div className="producers-quantity">0</div>
      </div>
    );
  }
}

export default Grandma;
