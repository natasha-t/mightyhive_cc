import React, {Component} from 'react';
import GlobalObject from './object';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Object_1: 'no-data',
      Object_2: 'no-data',
    }
  }

  componentDidMount() {

    const component = this;

    chrome.storage.local.get('dataLayer', function(data) {
      console.log('dataLayer from chrome storage', JSON.parse(data.dataLayer));

      component.setState({ Object_1: JSON.parse(data.dataLayer) });

    })

    chrome.storage.local.get('utag_data', function(data) {
      console.log('utag_data: ', JSON.parse(data.utag_data));

      component.setState({ Object_2: JSON.parse(data.utag_data) });
    })

  }

  render() {
    // iterate through this.state, pass data into GlobalObject component instance

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