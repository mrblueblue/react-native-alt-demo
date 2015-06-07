/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var MessageActions = require('./src/actions/MessageActions');
var MessageStore = require('./src/stores/MessageStore');

var MessageContainer = require('./src/components/MessageContainer')

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

class RNAltExample extends React.Component {

  constructor(){
    super()
    this.state = MessageStore.getState();
  }

  componentDidMount() {
    MessageStore.listen(this.onChange.bind(this));
    MessageActions.fetchMessages();
  }

  componentWillUnmount() {
    MessageStore.unlisten(this.onChange.bind(this));
  }

  onChange(state) {
    this.setState(state);
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native + Alt!
        </Text>
        <Text style={styles.instructions}>
          Here are the list of messages
        </Text>
        {
          this.state.messages.map(function(message){
            return (
              <MessageContainer message={message} />
            )
          })
        }
       
      </View>
    );
  
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RNAltExample', () => RNAltExample);
