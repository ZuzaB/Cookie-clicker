require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import CookieValue from './cookieValue';
import Cookie from './cookie';

class SectionLeft extends React.Component {
  render() {
    return (
      <div className="section-left">
        <CookieValue />
        <Cookie />
      </div>
    );
  }
}

// AppComponent.defaultProps = {
// };

export default SectionLeft;
