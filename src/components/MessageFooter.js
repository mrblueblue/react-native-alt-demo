var React = require('react-native');

var { View, Text } = React;

class MessageFooter extends React.Component {

  render(){
    console.log(this.props)
    return (
      <View style={{marginTop: 2}}>
        <Text style={{fontFamily: 'Avenir', fontSize: 10}}>
          <Text style={{fontWeight: '800'}}>{this.props.user}</Text> 
          - {this.props.timestamp} with {this.props.retweets} retweets
        </Text>
      </View>
    );
  }
}

module.exports = MessageFooter;
