import React, {Component} from 'react';

class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <li className='list-element'> {this.props.objKey} : {this.props.value} </li>
    )
  }


}

export default ListItem;