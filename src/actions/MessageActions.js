'use strict'

var alt = require('../alt');
var MessagesFetcher = require('../utils/MessagesFetcher');

class MessageActions {

  updateMessages(messages){
    this.dispatch(messages);
  }

  fetchMessages(location){
    MessagesFetcher.fetch(location)
      .then((messages)=>{
        this.actions.updateMessages(messages);})
      .catch((e)=>{console.log(e, "88888errr")})

  }

  messagesFailed(errorMessage) {
    this.dispatch(errorMessage);
  }
}

module.exports = alt.createActions(MessageActions);
