import MessageStore from '../MessageStore';
import MessageActions from '../../actions/MessageActions';

describe('Message Store', function() {
  it('has an intial state of empty messages', function() {
    expect(MessageStore.getState().messages.length).toBe(0);
  });
  it('can handle message updates', function(){
  	MessageActions.updateMessages(['hello']);
  	expect(MessageStore.getState().messages).toEqual(['hello']);
  });
  it('can handle message errors', function(){
  	MessageActions.messagesFailed('error');
  	expect(MessageStore.getState().errorMessage).toBe('error');
  });
});
 
