'use strict'

var React = require('react-native');

var { View, Text, StyleSheet } = React;

class MessageFooter extends React.Component {

  render(){
    return (
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>
          <Text style={styles.username}>{this.props.user} </Text> 
          - {this.props.timestamp} with {this.props.retweets} retweets
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  footerContainer: {
    marginTop: 2
  },
  footerText: {
    fontFamily: 'Avenir', 
    fontSize: 10
  },
  username: {
    fontWeight: '800'
  }
});

module.exports = MessageFooter;
