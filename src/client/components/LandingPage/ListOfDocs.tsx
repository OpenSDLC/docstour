import React, { Component } from 'react';
import Doc from './Doc';


class ListOfDocs extends Component {
  // render array of Docs

  render() {
    const arrOfDocs: Object[] = [];

    // let url: String = '';

    arrOfDocs.push(<Doc />)
    // console.log('url', this.props.url);
  return (
    <div>
    <div className='DocList'>
    {arrOfDocs}
    </div>
    </div>
  )
  }
}

export default ListOfDocs;
