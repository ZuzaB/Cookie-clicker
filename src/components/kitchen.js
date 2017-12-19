require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let Image = require('../images/grandmother.png');

class Kitchen extends React.Component {

  render() {
    return (
      <div className="producers-visual grandma">
        <img className="producers-img" src={Image} alt="Grandma Image" />
      </div>
    );
  }
}

export default Kitchen;
