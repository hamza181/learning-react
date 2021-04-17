import React, {useState} from 'react';

export function Message(props){
    return(
        <div>
            <h3>Message is: {props.msg}</h3>
        </div>
    );
}

// export default Message;
// already defined above