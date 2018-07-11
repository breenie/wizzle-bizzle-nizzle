import React, {Component} from 'react';
import Amplify from 'aws-amplify';
// import aws_exports from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import logo from './logo.svg';
import './App.css';

Amplify.configure({
  Auth: {
    identifyPoolId:      "eu-west-1:9035d0e8-5a1c-4aef-af9c-1d154dbe5d4b",
    userPoolId:          "eu-west-1_RmLY7i7Ts",
    userPoolWebClientId: "4mcvbj8klgschmvfnent18akuq",
    region:              "eu-west-1",
    mandatorySignIn:     false
  }

  // Auth: {
  //   identifyPoolId:      "eu-west-1:9035d0e8-5a1c-4aef-af9c-1d154dbe5d4b",
  //   userPoolId:          "eu-west-1_BIAJvoHbG",
  //   userPoolWebClientId: "5topemfrs2iulalmbt2pki1tac",
  //   region:              "eu-west-1",
  //   mandatorySignIn:     false
  // }
});

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
