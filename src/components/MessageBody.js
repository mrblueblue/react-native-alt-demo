var React = require('react-native');

var { View, Text } = React;

class MessageBody extends React.Component {

  render(){
    return (
      <View>
        <Text>{this.props}</Text>
      </View>
    );
  }
}

module.exports = MessageBody;
