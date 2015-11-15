'use strict';

import React from 'react-native';
import { Navigation } from './src/nav';

const { AppRegistry, StatusBarIOS } = React;

class RNAltDemo extends React.Component {

  componentWillMount(){
    StatusBarIOS.setStyle('light-content');
  }

  render() {
    return <Navigation/>
  }
}

AppRegistry.registerComponent('RNAltDemo', () => RNAltDemo);
