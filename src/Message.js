import React from 'react'
import "./Message.css"

function Message({message, timestamp, user, userImage}) {
    return (
        <div className = "message">
            <img src= {userImage} alt =""/>
            <div className ="message__info">
                <h4>{user}</h4>
                <p>{message}</p>
                <p className = "message__timestamp">{new Date(timestamp?.toDate()).toUTCString()}</p>
            </div>
        </div>
    )
}

export default Message
