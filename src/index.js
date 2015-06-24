'use strict';

import React from 'react-native';
import { Navigation } from './nav';

let { AppRegistry, StatusBarIOS } = React;

class RNAltExample extends React.Component {

  constructor(){
    super();
    this.state = {edit: true};
  }

  componentWillMount(){
    StatusBarIOS.setStyle('light-content');
  }

  render() {
    return (
      <Navigation
        edit={this.state.edit}
        toggle={this.toggleEdit.bind(this)} />
    );
  }

  toggleEdit(){
    this.setState({edit: this.state.edit ? false : true});
  }
}

AppRegistry.registerComponent('RNAltExample', () => RNAltExample);
