var React = require('react-native');

var { View, Text } = React;

class MessageFooter extends React.Component {

  render(){
    return (
      <View>
        <Text>{this.props.timestamp}</Text>
      </View>
    );
  }
}

module.exports = MessageFooter;
