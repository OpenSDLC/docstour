import React, { Component } from 'react';
import ListOfDocs from './ListOfDocs';
import { Button, Box, Card } from '@material-ui/core';


class DashboardContainer extends Component {
  // list of docs - component
    // docs components
  
  // pinned docs - component

  // BUTTON to add docs

  // search bar - component


  render() {
    // this.props.testKey = 'hello';
    // console.log('testKey', this.props.testKey);
    return(
      <div>
        <Box>
          <Card><h2>Docs</h2></Card>
          <Button color="primary">add a doc</Button>
          <ListOfDocs />

        </Box>
      </div>
    );
  }
}

export default DashboardContainer;
