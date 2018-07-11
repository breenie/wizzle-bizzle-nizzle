import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {AmplifyTheme} from "aws-amplify-react";

const MyNavBar = Object.assign({}, AmplifyTheme.navBar, { backgroundColor: 'orange' });
const MyTheme = Object.assign({}, AmplifyTheme, { navBar: MyNavBar});

ReactDOM.render(<App theme={MyTheme} />, document.getElementById('root'));
registerServiceWorker();
