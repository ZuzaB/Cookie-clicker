require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let Image = require('../images/cursor.png'),
    cookieImage = require('../images/cookie.png');

class Cursor extends React.Component {

  render() {
    return (
      <div className="producers">
        <div className="producers-info">Each cursor produces <strong>0.1</strong> cookies per second</div>
        <img className="producers-img" src={Image} alt="Cursor Image" />
        <div>
          <h2 className="producers-header">Cursor</h2>
            <img className="producers-cookie-img" src={cookieImage} alt="Cookie Image" />
            <span className="producers-price">&nbsp;&nbsp;15</span>
        </div>
        <div className="producers-quantity">0</div>
      </div>
    );
  }
}

export default Cursor;
