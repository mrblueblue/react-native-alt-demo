'use strict'

var React = require('react-native');

var { Image, TouchableOpacity } = React;

class SearchButton extends React.Component {
  render(){
    return (
      <TouchableOpacity
        onPress={this.props.handlePress}>
        <Image 
          source={{uri: 'http://i.imgur.com/hEdrSMe.png'}}
          style={{width:20, height:20, marginBottom: 10, marginRight: 20}} />
      </TouchableOpacity>
    );
  }
}

module.exports = SearchButton;
