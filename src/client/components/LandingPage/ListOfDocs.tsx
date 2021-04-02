import React, { Component } from 'react';
import Doc from './Doc';
import { connect } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import { DocumentState, Document } from '../../redux/documentReducer';
import { Card, CardActions, CardContent, Button, Link, List } from '@material-ui/core';

interface Props {
  docList: Document[];
}

class ListOfDocs extends Component<Props> {
  // render array of Docs

  render() {
    console.log("my doclist: ", this.props.docList)
    const docList = this.props.docList.map(document => {
      return (
        <Card className="card">
          {/* Name: {document.name} | URL: {document.url} | Notes: {document.notes} */}
          <CardContent>
            <h2>{document.name}</h2>
            <Link href={document.url}>{document.url}</Link> <br></br><br></br>
            {document.notes} <br></br><br></br>
          </CardContent>

          <CardActions>
          <Button size="small" variant="contained">Edit</Button>
          <Button size="small" variant="contained" color="secondary">Delete</Button>
        </CardActions>
        </Card>
      )
      // return <li>document.name</li>
    })
    return (
      <div className="listContainer">
        
        {docList}
        
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
