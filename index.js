import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {Root} from 'native-base';
import App from './App';
export default class ReduxCounter extends Component {
    render() {
      return (
        <Root>
        <App />
        </Root>
      );
    }
  }
AppRegistry.registerComponent(appName, () => ReduxCounter);
