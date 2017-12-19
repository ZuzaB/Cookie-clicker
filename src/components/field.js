require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let Image = require('../images/farm.png');

class Field extends React.Component {

  render() {
    return (
      <div className="producers-visual farm">
        <img className="producers-img" src={Image} alt="Farm Image" />
      </div>
    );
  }
}

export default Field;
