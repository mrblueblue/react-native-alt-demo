'use strict'

import React from 'react-native';

let { View, Text } = React;

export class MessageBody extends React.Component {

  render(){
    return (
      <View>
        <Text style={{fontFamily: 'Avenir'}}>{this.props}</Text>
      </View>
    );
  }
}
