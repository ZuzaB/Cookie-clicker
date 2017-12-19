import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import SectionLeft from './components/sectionLeft';
import SectionCenter from './components/sectionCenter';
import SectionRight from './components/sectionRight';

class App extends React.Component {
  render() {
    return (
     <div className="container">
      <SectionLeft />
      <SectionCenter/>
      <SectionRight/>
     </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
