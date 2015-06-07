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
      <TextInput
        style={{textAlign: 'center', height: 50, margin: 30, marginTop: 60, padding: 10, backgroundColor: 'white', fontFamily: 'Avenir', fontSize: 20, borderRadius: 10}}
        editable={true}
        onChangeText={(text) => this.setState({input: text})}
        onSubmitEditing={this.handleSubmit.bind(this)}
        placeholder={'please enter a location...'}
        value={this.state.input}
      />
    );
  }

  handleSubmit(){
    var location = this.state.input;
    MessageActions.fetchMessages(location);
    this.setState({input:''})
    this.props.toggle()
  }
}

module.exports = LocationTextInput;
