import React, { Component } from 'react';
import ListOfDocs from './ListOfDocs';

class DashboardContainer extends Component {
  // list of docs - component
    // docs components
  
  // pinned docs - component

  // BUTTON to add docs

  // search bar - component

  render() {
    return(
      <div>
        <div>
          <h2>Docs</h2>
          <ListOfDocs />
        </div>
      </div>
    );
  }
}

export default DashboardContainer;