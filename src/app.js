'use strict'

var React = require('react-native');

var MessageActions = require('./actions/MessageActions');
var MessageStore = require('./stores/MessageStore');

var MessagesFetcher = require('./utils/MessagesFetcher');
var MessageContainer = require('./components/MessageContainer')
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
    MessageActions.fetchMessages('san francisco')
  }

  componentWillUnmount() {
    MessageStore.unlisten(this.onChange.bind(this));
  }

  onChange(state) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(state.messages)
    });
  }

  render() {
  
    if (this.props.edit) {
      return (
        <View style={{flex: 1, alignItems: 'center', borderRadius: 10}}>
          <LocationTextInput toggle={this.props.toggle} />
        </View>
      );

    } else {
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
            style={{backgroundColor: 'white', height: require('Dimensions').get('window').height-50}}
          />
        </View>
      );
    }
  }

  renderRow(message){
    return ( 
      <MessageContainer message={message} /> 
    );
  }
}

module.exports = App;
