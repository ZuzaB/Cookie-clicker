require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import CookieValue from './cookieValue';
import Cookie from './cookie';
import CursorExtra from './cursorExtra';

class SectionLeft extends React.Component {
  render() {
    return (
      <div className="section-left">
        <CookieValue />
        <Cookie />
        <CursorExtra />
      </div>
    );
  }
}

// AppComponent.defaultProps = {
// };

export default SectionLeft;
