'use strict';

import React from 'react-native';
import { Navigation } from './nav';

let { AppRegistry, StatusBarIOS } = React;

class RNAltExample extends React.Component {

  componentWillMount(){
    StatusBarIOS.setStyle('light-content');
  }

  render() {
    return <Navigation/>
  }
}

AppRegistry.registerComponent('RNAltExample', () => RNAltExample);
