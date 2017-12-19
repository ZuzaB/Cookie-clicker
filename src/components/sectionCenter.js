require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Kitchen from './kitchen';
import Field from './field';
import MineField from './mineField';
import FactoryField from './factoryField';

class SectionCenter extends React.Component {
  render() {
    return (
      <div className="section-center">
        <Kitchen />
        <Field />
        <MineField />
        <FactoryField />
      </div>
    );
  }
}
export default SectionCenter;
