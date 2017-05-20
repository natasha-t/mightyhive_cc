import React, {Component} from 'react';
import GlobalObject from './object';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Object_1: null,
      Object_2: null,
    }
  }

  componentDidMount() {

    const component = this;

    // get dataLayer and utag_data from chrome local storage, set state

    chrome.storage.local.get('dataLayer', function(data) {
       component.setState({ Object_1: JSON.parse(data.dataLayer) });
    })

    chrome.storage.local.get('utag_data', function(data) {
      component.setState({ Object_2: JSON.parse(data.utag_data) });
    })

  }

  render() {
    return (
      <div className='container'>
          {Object.entries(this.state).map((objects, index) => {

            return <GlobalObject id={index} key={index + 1} name={objects[0]} data={objects[1]} />
          })}
      </div>
    );
  }
}

export default App;