import React, {Component} from 'react';
import List from './list';
import ListItem from './listItem';

class GlobalObject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleView: false
    }
  }

  displayContents() {
    this.setState({ toggleView: !this.state.toggleView });    
  }

  render() {
    return (
      <div id={'object' + (this.props.id + 1)} className='object' onClick={this.displayContents.bind(this)}>

          <h1> {this.props.name} </h1>

          {this.state.toggleView ? <List data={this.props.data} /> : null}
        
      </div>
    );
  }
}

export default GlobalObject;