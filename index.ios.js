/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var NavigationBar = require('react-native-navbar');

var MessageActions = require('./src/actions/MessageActions');
var MessageStore = require('./src/stores/MessageStore');

var MessagesFetcher = require('./src/utils/MessagesFetcher');
var MessageContainer = require('./src/components/MessageContainer')
var LocationTextInput = require('./src/components/LocationTextInput');

var {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  View,
  ListView,

} = React;

class RNAltExample extends React.Component {

  constructor(){
    super()
    this.state = MessageStore.getState();
    this.state.dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
  }

  componentDidMount() {
    MessageStore.listen(this.onChange.bind(this));
    MessageActions.fetchMessages('san francisco')
  }

  componentWillUnmount() {
    MessageStore.unlisten(this.onChange.bind(this));
  }

  onChange(state) {
    this.setState({dataSource: this.state.dataSource.cloneWithRows(state.messages)});
  }

  render() {
    return (
        <View style={{flexDirection: 'column'}}>
          <LocationTextInput style={{width: 100, height: 40}}/>
          <ListView
            initialListSize={10}
            pageSize={4}
            scrollRenderAheadDistance={2000} 
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
            removeClippedSubviews={true}
            scrollEnabled={true}
            style={{backgroundColor: 'white', height: require('Dimensions').get('window').height}}
          />
        </View>
    );
  
  }

  renderRow(message){
    return(<MessageContainer message={message}/>);
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
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
  }
});

AppRegistry.registerComponent('RNAltExample', () => RNAltExample);
