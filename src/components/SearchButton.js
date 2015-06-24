'use strict';

import React from 'react-native';

let { Image, TouchableOpacity } = React;

export class SearchButton extends React.Component {
  render(){
    return (
      <TouchableOpacity
        onPress={this.props.handlePress}>
        <Image
          source={{uri: 'http://i.imgur.com/hEdrSMe.png'}}
          style={{width: 20, height: 20, marginBottom: 10, marginRight: 20}} />
      </TouchableOpacity>
    );
  }
}
