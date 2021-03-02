import React from "react";

export default function User ( details ) {
    
    // if ( !details ) {
    //     return <h3>Grabbing that info...</h3>
    // }

    return (
        <div className = "user-container">
            <h2>Users: { details.username }</h2>
            <p>Email: { details.email }</p>    
        </div>
    )
}