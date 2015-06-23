

import { alt } from '../alt';
import MessageActions from '../actions/MessageActions';

export class MessageStore {

  constructor() {
    this.messages = [];
    this.errorMessage = null;

    this.bindListeners({
      handleUpdateMessages: MessageActions.UPDATE_MESSAGES,
      handleFetchMessages: MessageActions.FETCH_MESSAGES,
      handleMessagesFailed: MessageActions.MESSAGES_FAILED
    });
  }

  handleUpdateLocation(location) {
    this.location = location;
  }

  handleUpdateMessages(messages) {
    this.messages = messages;
    this.errorMessage = null;
  }

  handleFetchMessages() {
    this.messages = [];
  }

  handleMessagesFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }
}

export default alt.createStore(MessageStore, 'MessageStore');
