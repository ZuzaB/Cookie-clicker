require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Cursor from './cursor';
import Grandma from './grandma';
import Farm from './farm';
import Mine from './mine';
import Factory from './factory';

class SectionRight extends React.Component {
  render() {
    return (
      <div className="section-right">
      <Cursor />
      <Grandma />
      <Farm />
      <Mine />
      <Factory />
      </div>
    );
  }
}
export default SectionRight;
