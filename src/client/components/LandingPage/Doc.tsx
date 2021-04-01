import React, { Component } from 'react';
import { Card, CardActions, CardContent, Button, Link } from '@material-ui/core';


class DocContainer extends Component {






  render() {
    return (
      <Card className="card">
        <CardContent>
          Doc of the Day <br></br>
          <Link>Doc URL</Link>
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
