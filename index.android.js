'use strict';

import React from 'react-native';
import { Navigation } from './src/nav';

const { AppRegistry } = React;

class RNAltDemo extends React.Component {
  render() {
    return <Navigation/>
  }
}

AppRegistry.registerComponent('RNAltDemo', () => RNAltDemo);
