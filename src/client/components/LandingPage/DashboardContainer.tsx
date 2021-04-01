import React, { Component } from 'react';
import axios from 'axios';
import store from '../../redux/store';
import ListOfDocs from './ListOfDocs';
import { TextField, Button, Box, Card } from '@material-ui/core';
import { connect, ConnectedProps } from 'react-redux';
// import the action creators from actions.ts
import { incrementCounter, decrementCounter, addDoc } from '../../redux/actions';

interface Counter {
  count: number;
}
interface State {
  counter: Counter;
}p
interface Props {
  increment: () => {};
  decrement: () => {};
  // addDoc: () => {};
  count: number;
}
// pass in state
const mapStateToProps = (state: State) => {
  return {
    count: state.counter.count,
  }
};

const mapDispatchToProps = (dispatch: typeof store.dispatch) => {
  return {
    // dispatch will take in the action creator from actions.ts
    increment: () => dispatch(incrementCounter()),
    decrement: () => dispatch(decrementCounter()),
    // addDoc: () => dispatch(addDoc(name, url, notes)),
  }
}

async function getDocuments() {
  const result = await fetch('http://localhost:3000/api/', {
    method: 'GET',
    mode: "no-cors"
  });
  console.log('Hello, hello');
  console.log("result: ", result.body.allDocuments);
}



class DashboardContainer extends Component<Props> {
  constructor(props: Props) {
    super(props)
  }
  // list of docs - component
    // docs components
  
  // pinned docs - component

  // BUTTON to add docs

  // search bar - component
  componentDidMount() {
    getDocuments();
  };
  render() {
    // this.props.testKey = 'hello';
    // console.log('testKey', this.props.testKey);
    const { increment, decrement } = this.props;

    console.log('counter should increase', this.props.count);
    return(
      <div>
        <Box>
          <Card><h2>Docs</h2></Card>
          <h1>{this.props.count}</h1>
          <form>
            <TextField id="urlInput" label="Standard" />
          </form>
          {/* <Button onClick={() => this.props.addDoc()} color="primary">add a doc</Button> */}
          <Button onClick={() => this.props.increment()} color="secondary">increment</Button>
          <Button onClick={() => this.props.decrement()} color="secondary">decrement</Button>
          <ListOfDocs />
        </Box>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);