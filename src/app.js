'use strict'

var React = require('react-native');

/* Alt/Flux */
var MessageActions = require('./actions/MessageActions');
var MessageStore = require('./stores/MessageStore');

/* Components */
var MessageContainer = require('./components/MessageContainer');
var LocationTextInput = require('./components/LocationTextInput');

var {
  
  StyleSheet,
  Text,
  View,
  ListView,

} = React;

class App extends React.Component {

  constructor(){
    super();
    this.state = MessageStore.getState();
    this.state.dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
  }

  componentDidMount() {
    MessageStore.listen(this.onChange.bind(this));
  }

  componentWillUnmount() {
    MessageStore.unlisten(this.onChange.bind(this));
  }

  onChange(state) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(state.messages),
      messages: state.messages
    });
  }

  render() {

    // Edit State
    if (this.props.edit) {
      return (
        <View style={styles.inputContainer}>
          <LocationTextInput toggle={this.props.toggle} />
        </View>
      );
    }

    // Error State
    if (this.state.errorMessage) {
      return (
        <Text>{this.state.errorMessage}</Text>
      );
    }

    // Loading State
    if (!this.state.messages.length) {
      return (
        <Text>loading</Text>
      );
    }

    // Success State
    return (
      <View>
        <ListView
          initialListSize={10}
          pageSize={4}
          scrollRenderAheadDistance={2000} 
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          removeClippedSubviews={true}
          scrollEnabled={true}
          style={styles.messagesView}
        />
      </View>
    );
    
  }

  renderRow(message){
    return ( 
      <MessageContainer message={message} /> 
    );
  }
}

var styles = StyleSheet.create({
  inputContainer: {
    flex: 1, 
    alignItems: 'center', 
    borderRadius: 10
  },
  messagesView: {
    backgroundColor: 'white', 
    height: require('Dimensions').get('window').height-50
  }
});

module.exports = App;
