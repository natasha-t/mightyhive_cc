import React, {Component} from 'react';
import GlobalObject from './object';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataLayer: null,
      utag_data: null,
    }
  }

  componentDidMount() {
    // this.findObjects();
    const component = this;

    chrome.storage.local.get('dataLayer', function(data) {
      console.log('data from chrome storage', data.dataLayer);

      component.setState({ dataLayer: data.dataLayer });

    })

    chrome.storage.local.get('utag_data', function(data) {
      console.log('utag_data: ', data.utag_data);

      component.setState({ utag_data: data.utag_data });
    })

  }

  componentDidUpdate(prevProps, prevState) {
    console.log('previous state: ', prevState, 'curr state: ', this.state);

  }

  render() {
    // iterate through this.state, pass data into GlobalObject component instance

    return (
      <div className='content'>
        
      </div>
    );
  }
}

export default App;