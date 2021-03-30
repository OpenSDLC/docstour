import React, { Component } from 'react';
import Doc from './Doc';

class ListOfDocs extends Component {
  // render array of Docs

  render() {
    const arrOfDocs: Object[] = [];

    // let url: String = '';

    arrOfDocs.push(<Doc />)

    return (
      <div>
        {arrOfDocs}
      </div>
    )
  }
}

export default ListOfDocs;