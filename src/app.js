'use strict'

import React from 'react-native';

/* Alt/Flux */
import MessageActions from './actions/MessageActions';
import MessageStore from './stores/MessageStore';

/* Components */
import { MessageContainer } from './components/MessageContainer';
import { LocationTextInput } from './components/LocationTextInput';

let {
  
  StyleSheet,
  Text,
  View,
  ListView,
  ActivityIndicatorIOS,

} = React;

export class App extends React.Component {

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
      <View style={styles.inputContainer}>
        <Text style={[styles.errorText, {marginTop: 60}]}>
          {this.state.errorMessage}
        </Text>
      </View>
      );
    }

    // Loading State
    if (!this.state.messages.length) {
      return (
        <ActivityIndicatorIOS
          animating={true}
          style={[styles.centering, styles.loading]}
          size="large"
        />
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
  },
  errorText: {
    fontFamily: 'Avenir',
    fontSize: 20
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  loading: {
    height: 100, 
    marginTop: 60
  }
});
