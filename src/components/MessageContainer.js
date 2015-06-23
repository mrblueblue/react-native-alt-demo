'use strict'

import React from 'react-native';
import { MessageBody } from './MessageBody';
import { MessageFooter } from './MessageFooter';

let { View } = React;

export class MessageContainer extends React.Component {

  render(){
    let { body, ...props } = this.props.message;
    return(
      <View style={{padding: 10}}>
        <MessageBody body={body}/>
        <MessageFooter {...props}/>
      </View>
    );
  }
}
