import React, { Component } from 'react';
import Doc from './Doc';
import { List } from '@material-ui/core';



class ListOfDocs extends Component {
  // render array of Docs

  render() {
    const arrOfDocs: Object[] = [];

    // let url: String = '';

    arrOfDocs.push(<Doc />)
    arrOfDocs.push(<Doc />)
    // console.log('url', this.props.url);
  return (
    <div>
      <List>
        LIST
        {arrOfDocs}
      </List>
    </div>
  )
  }
}

export default ListOfDocs;
