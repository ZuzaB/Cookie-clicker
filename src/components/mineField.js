require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let Image = require('../images/mine.png');

class MineField extends React.Component {

  render() {
    return (
      <div className="producers-visual mine">
        <img className="producers-img" src={Image} alt="Mine Image" />
      </div>
    );
  }
}

export default MineField;
