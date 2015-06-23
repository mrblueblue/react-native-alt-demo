'use strict'

import React from 'react-native';

import MessageActions from '../actions/MessageActions';

let { TextInput, View , StyleSheet } = React;

export class LocationTextInput extends React.Component {

  constructor(){
    super();
    this.state = {input: ''};
  }

  render(){
    return(      
      <TextInput
        style={styles.locationInput}
        editable={true}
        onChangeText={(text) => this.setState({input: text})}
        onSubmitEditing={this.handleSubmit.bind(this)}
        placeholder={'please enter a location...'}
        value={this.state.input}
      />
    );
  }

  handleSubmit(){
    var location = this.state.input;
    MessageActions.fetchMessages(location);
    this.setState({input:''})
    this.props.toggle();
  }
}

var styles = StyleSheet.create({
  locationInput: {
    textAlign: 'center', 
    height: 50, 
    margin: 30, 
    marginTop: 60, 
    padding: 10, 
    backgroundColor: 'white', 
    fontFamily: 'Avenir', 
    fontSize: 20, 
    borderRadius: 10
  }
});
