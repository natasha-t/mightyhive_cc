import React, {Component} from 'react';
import GlobalObject from './object';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <GlobalObject />
      </div>
    );
  }
}

export default App;