import React, {Component} from 'react';

class GlobalObject extends Component {
  constructor(props) {
    super(props);

    console.log('object props', props);
  }

  renderObjectName() {
    console.log('props data from renderObjectName: ', this.props.data);
    if (this.props.data) {
      return <h1> {this.props.data[0]} </h1>
    } else {
      return <p> bloop </p>
    }
  }

  renderObjectContents() {
    console.log('props data from renderObjectContents: ', this.props.data);
    if (!this.props.data[1]) {
      return <p> No objects found </p>
    } 
  }

  render() {
    return (
      <div className='object'>
        {this.renderObjectName()}
      </div>
    );
  }
}

export default GlobalObject;