import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import Title from './components/title';
import SectionLeft from './components/sectionLeft';
import SectionCenter from './components/sectionCenter';
import SectionRight from './components/sectionRight';

class App extends React.Component {
  render() {
    return (
      <div>
       <Title />
       <div className="container">
        <SectionLeft />
        <SectionCenter/>
        <SectionRight/>
       </div>
     </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
