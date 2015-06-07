var alt = require('../alt');
var MessagesFetcher = require('../utils/MessagesFetcher');

class MessageActions {

  updateLocation(location){
    this.dispatch(location)
  }

  updateMessages(messages){
    this.dispatch(messages);
  }

  fetchMessages(location){
    MessagesFetcher.fetch(location)
      .then((messages)=>{
        console.log(messages)
        this.actions.updateMessages(messages);
      })
  }

  messagesFailed(errorMessage) {
    this.dispatch(errorMessage);
  }
}

module.exports = alt.createActions(MessageActions);
