import React from 'react';
import './Message.css';

const Message = props => (
  <div className='message'>
    <span className='message__author'>{props.message.author}</span>
    {props.message.message}
  </div>
);

export default Message;