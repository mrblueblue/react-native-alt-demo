'use strict';

var React = require('react-native');
var Navigation =require('./src/nav');

var { AppRegistry, Navigator, StatusBarIOS } = React;

class RNAltExample extends React.Component {

  constructor(){
    this.state = {edit: true};
  }

  componentWillMount(){
    StatusBarIOS.setStyle(StatusBarIOS.Style.lightContent);
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
