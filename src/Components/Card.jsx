import React from 'react'
import '../App.css'

export default function Card({obj}) {
    
    return (
        <div id="card1" className="cards" >
            <img src={`https://robohash.org/${obj.id}`} alt=""  className="img" />
            <h2 id="name1">{obj.name}</h2>
            <p id="email1">{obj.email}</p>
            <p id="username1">{obj.username}</p>
        </div>
    )
}
