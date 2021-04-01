import React, { Component } from 'react';
import Doc from './Doc';
import { connect } from 'react-redux';
import { List } from '@material-ui/core';
import { RootState } from '../../redux/rootReducer';
import { Document } from '../../redux/documentReducer';

interface Props {
  docList: Document[]
}

class ListOfDocs extends Component<Props> {
  // render array of Docs

  render() {
    console.log(this.props.docList)
    const docList = this.props.docList.map(document => {
      return <li>Name: {document.name} | URL: {document.url} | Notes: {document.notes}</li>
    })
    return (
      <div>
        <List>
          LIST
          {docList}
        </List>
      </div>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    docList: state.document.docList
  }
};

export default connect(mapStateToProps)(ListOfDocs);
