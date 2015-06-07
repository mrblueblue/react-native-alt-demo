var React = require('react-native');

var MessageActions = require('../actions/MessageActions');

var { TextInput, View } = React;

class LocationTextInput extends React.Component {

  constructor(){
    super()
    this.state = {input: ''}
  }

  render(){
    return(
      <View>
        <TextInput
          style={{height: 40, width: 100, borderColor: 'gray', borderWidth: 1}}
          editable={true}
          onChangeText={(text) => this.setState({input: text})}
          onSubmitEditing={this.handleSubmit.bind(this)}
          placeholder={'enter a location'}
          value={this.state.input}
        />
      </View>
    );
  }

  handleSubmit(){
    var location = this.state.input;
    MessageActions.fetchMessages(location);
    this.setState({input:''})

  }
}

module.exports = LocationTextInput;
