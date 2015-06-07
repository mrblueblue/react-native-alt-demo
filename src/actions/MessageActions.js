var alt = require('../alt');

class MessageActions {

  updateMessages(messages){
    this.dispatch(messages);
  }

  fetchMessages(){
    var MOCK = [
      {body: 'hello', timestamp: '1 min ago', location: 'San Francisco'},
      {body: 'goodbye', timestamp: '1 min ago', location: 'San Francisco'},
      {body: 'where does the wind blow', timestamp: '1 min ago', location: 'San Francisco'},
      {body: 'duuuuude', timestamp: '1 min ago', location: 'San Francisco'},
      {body: 'whaaaat', timestamp: '1 min ago', location: 'San Francisco'}
    ];

    this.actions.updateMessages(MOCK);
  }

  messagesFailed(errorMessage) {
    this.dispatch(errorMessage);
  }
}

module.exports = alt.createActions(MessageActions);
