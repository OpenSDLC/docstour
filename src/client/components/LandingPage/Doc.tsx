import React, { Component } from 'react';
import { Card, CardActions, CardContent, Button, Link } from '@material-ui/core';

interface Props {
  name: string,
  url: string,
  notes: string
}


class DocContainer extends Component<Props> {

  




render() {
  return (
    <Card className="card">
      <CardContent>
        Doc of the Day <br></br>
        <Link>{this.props.url}</Link>
      </CardContent>

      <CardActions>
        <Button size="small" variant="contained">Edit</Button>
        <Button size="small" variant="contained" color="secondary">Delete</Button>
      </CardActions>
    </Card>
  )
}
}

export default DocContainer;
