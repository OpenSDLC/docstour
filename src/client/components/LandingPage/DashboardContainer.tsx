import React, { Component } from 'react';
import ListOfDocs from './ListOfDocs';
import { Button, Box } from '@material-ui/core';


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
          Box 1
          <Button>test button</Button>
        </Box>
        <div>
          <h2>Docs</h2>
          
          <Button>Add a Doc</Button>
          <ListOfDocs />
        </div>
      </div>
    );
  }
}

export default DashboardContainer;
