'use strict';

import { alt } from '../alt';
import { MessagesFetcher } from '../utils/MessagesFetcher';

export class MessageActions {

  updateMessages(messages) {
    this.dispatch(messages);
  }

  fetchMessages(location) {
    this.dispatch();
    MessagesFetcher.fetch(location)
      .then((messages)=>{
        this.actions.updateMessages(messages); })
      .catch((e)=>{
        console.log('Response Error', e);
        this.actions.messagesFailed(e);
      });
  }

  messagesFailed(errorMessage) {
    this.dispatch(errorMessage);
  }
}

export default alt.createActions(MessageActions);
