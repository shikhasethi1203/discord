import React from 'react';
import './Message.css';
import Avatar from '@mui/material/Avatar';
function Message(timestamp,user,message) {
  return (
    <div className='message'>
        <Avatar src={user.photo}/>
        <div className="message_Info">
            <h4>
            {user.displayName}
                <span className='3essage_timestamp'>Timestamp</span>
            </h4>
            <p>This is the message.</p>
        </div>
    </div>
  )
}
export default Message