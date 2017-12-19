require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class CookieValue extends React.Component {
  render() {
    return (
      <div className="cookie-quantity">
      0 cookies
        <div className="cookie-quantity-sec">
          per second: 0
        </div>
      </div>
    );
  }
}
export default CookieValue;
