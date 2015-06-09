'use strict'

var React = require('react-native');
var MessageBody = require('./MessageBody');
var MessageFooter = require('./MessageFooter');

var { View } = React;

class MessageContainer extends React.Component {

  render(){
    var { body, ...props } = this.props.message;
    return(
      <View style={{padding: 10}}>
        <MessageBody body={body}/>
        <MessageFooter {...props}/>
      </View>
    );
  }
}

module.exports = MessageContainer;
