require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class Title extends React.Component {
  render() {
    return (
      <div className="title">
        <h1>Cookie Clicker</h1>
      </div>
    );
  }
}
export default Title;
