var alt = require('../alt');

class MessageActions {

  updateMessages(messages){
    this.dispatch(messages);
  }

  fetchMessages(){
    console.log('FETCH')
    var messages = ['hello', 'how', 'are', 'you'];
    this.actions.updateMessages(messages);
  }

  messagesFailed(errorMessage) {
    this.dispatch(errorMessage);
  }
}

module.exports = alt.createActions(MessageActions);
