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
      <div className='object' onClick={this.displayContents.bind(this)}>

        <h2> {this.props.name} </h2>

        { this.state.toggleView ? <List data={this.props.data} /> : null }
        
      </div>
    );
  }
}

export default GlobalObject;