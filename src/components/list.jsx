import React, {Component} from 'react';
import ListItem from './listItem';

class List extends Component {
  constructor(props) {
    super(props);
  }

  renderListItems() {
    if (this.props.data) {

       if (Array.isArray(this.props.data)) {

        return this.props.data.map((object, index) => {
          for (let key in object) {
            return <ListItem key={index} objKey={key} value={object[key]} />
          }
        })

      } else {

        return Object.entries(this.props.data).map((keyValue, index) => {
          if (Array.isArray(keyValue[1])) {
            return <ListItem objKey={keyValue[0]} value={keyValue[1][0]} key={index} />
          }
          return <ListItem objKey={keyValue[0]} value={keyValue[1]} key={index} />   
        })

      }


    } else {
      return <li className='no-data'> Object is undefined </li>
    }
  }


  render() {
    return(
      <ul className='list'>
        {this.renderListItems()}
      </ul>
    )
  }


}

export default List;