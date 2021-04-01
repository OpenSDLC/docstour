import React, { Component } from 'react';
import { Card, CardActions, CardContent, Button, Link } from '@material-ui/core';
import { RootState } from '../../redux/rootReducer';
import { DocumentState, Document } from '../../redux/documentReducer';
import { connect } from 'react-redux';

interface Props {
  docList: Document[];
}


class DocContainer extends Component<Props> {

  




  render() {
    const docList = this.props.docList.map(document => {
      return <li>Name: {document.name} | URL: {document.url} | Notes: {document.notes}</li>
      // return <li>document.name</li>
    })

    return (
      <Card className="card">
        <CardContent>
          Name <br></br>
          <Link>{}</Link>
          Notes
        </CardContent>

        <CardActions>
          <Button size="small" variant="contained">Edit</Button>
          <Button size="small" variant="contained" color="secondary">Delete</Button>
        </CardActions>
      </Card>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    docList: state.document.docList
  }
};

export default connect(mapStateToProps)(DocContainer);
