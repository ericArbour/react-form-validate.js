import React from 'react';

const Message = ({ color, message }) => (
  <div style={{ color }}>
    <small>{message}</small>
  </div>
);

export default Message;
