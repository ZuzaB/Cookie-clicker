require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let Image = require('../images/factory.png');

class FactoryField extends React.Component {

  render() {
    return (
      <div className="producers-visual factory">
        <img className="producers-img" src={Image} alt="Factory Image" />
      </div>
    );
  }
}

export default FactoryField;
