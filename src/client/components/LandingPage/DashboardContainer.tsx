import React, { Component } from 'react';
import axios from 'axios';
import store from '../../redux/store';
import ListOfDocs from './ListOfDocs';
import { TextField, Button, Box, Card } from '@material-ui/core';
import { connect, ConnectedProps } from 'react-redux';
import ReduxThunk from 'redux-thunk';
// import the action creators from actions.ts
import { incrementCounter, decrementCounter, addDoc } from '../../redux/actions';

interface Counter {
  count: number;
}
interface Props {
  increment: () => {};
  decrement: () => {};
  addDoc: (name: string, url: string, notes: string) => {};
  count: number;
}

async function getDocuments() {
  const fetchResult = await fetch('http://localhost:3000/api/', {
    method: 'GET',
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": 'true'
    }
  });
  const result = await fetchResult.json();
  result.forEach((document: any) => {
    console.log(document);
  });
}

interface State {
  name: string;
  url: string;
  notes: string;
  counter: Counter;
}

class DashboardContainer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: '',
      url: '',
      notes: '',
      counter: { count: 0 }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  // list of docs - component
  // docs components

  // pinned docs - component

  // BUTTON to add docs

  // search bar - component
  componentDidMount() {
    getDocuments();
  };
  handleChange(event: any) {
    switch (event.target.name) {
      case 'name':
        this.setState({ name: event.target.value });
        break;
      case 'url':
        this.setState({ url: event.target.value });
        break;
      case 'notes':
        this.setState({ notes: event.target.value });
        break;
    }
  }
  handleSubmit(event: any) {
    event.preventDefault();
    this.props.addDoc(this.state.name, this.state.url, this.state.notes)
  }
  render() {
    // this.props.testKey = 'hello';
    // console.log('testKey', this.props.testKey);
    const { increment, decrement } = this.props;

    console.log('counter should increase', this.props.count);
    return (
      <div>
        <Box>
          <Card><h2>Docs</h2></Card>
          <h1>{this.props.count}</h1>
          {/* <Button onClick={() => this.props.addDoc(name, url, notes)} color="primary">add a doc</Button> */}
          <form onSubmit={this.handleSubmit}>
            <label>
              {/* Name: */}
              <TextField label="Name" type="text" name="name" value={this.state.name} onChange={this.handleChange} />
            </label> <br></br> <br></br>
            <label>
              {/* URL: */}
              <TextField label="Url" type="text" name="url" value={this.state.url} onChange={this.handleChange} />
            </label> <br></br> <br></br>
            <label>
              {/* Notes: */}
              <TextField label="Notes" type="text" name="notes" value={this.state.notes} onChange={this.handleChange} />
            </label> <br></br> <br></br>
            <Button color="primary" type="submit" value="Submit">Submit</Button>
          </form>
          <Button color="primary">add a doc</Button>
          <Button onClick={() => this.props.increment()} color="secondary">increment</Button>
          <Button onClick={() => this.props.decrement()} color="secondary">decrement</Button>
          <ListOfDocs />
        </Box>
      </div>
    );
  }
}

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
    addDoc: (name: string, url: string, notes: string) => dispatch(addDoc(name, url, notes)),
    count: 0
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);