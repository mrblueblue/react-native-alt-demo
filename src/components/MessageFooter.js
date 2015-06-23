'use strict';

import React from 'react-native';

let { View, Text, StyleSheet } = React;

export class MessageFooter extends React.Component {

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

let styles = StyleSheet.create({
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

