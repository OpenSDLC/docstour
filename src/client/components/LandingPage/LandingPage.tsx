import React, { Component } from 'react';

class LandingPage extends Component {

  // login - username and password - elements, not components
  // signup (pop up) - username, email, password
  // event handlers

  render() {
    return (
      <div>
        <div>
          <p>Username</p>
          <input className='username'/>
          <span>
            <button className='usernameButton'>submit</button>
          </span>
        </div>
        <div>
          <p>Password</p>
          <input className='password'/>
          <span>
            <button className='passwordButton'>submit</button>
          </span>
        </div>
        <h6>Don't have an account? Sign up</h6>
      </div>
    );
  }
  
}

export default LandingPage;
