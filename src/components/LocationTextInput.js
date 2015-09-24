'use strict';

import React from 'react-native';

import MessageActions from '../actions/MessageActions';

let { TextInput, StyleSheet } = React;

export class LocationTextInput extends React.Component {

  constructor(){
    super();
    this.state = {input: ''};
  }

  render(){
    return (
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
    let location = this.state.input;
    MessageActions.fetchMessages(location);
    this.setState({input: ''});
  }
}

let styles = StyleSheet.create({
  locationInput: {
    height: 40,
    margin: 10,
    marginBottom: 0,
    padding: 10,
    backgroundColor: '#F8F8F8',
    fontFamily: 'Avenir',
    fontSize: 20,
    borderRadius: 10
  }
});
