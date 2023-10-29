import React from "react"
import './player.css'
import profile from './img/profile.jpg'
import three from './img/three.jpeg'

const player = (props) => {
  return (
    <div className="playerContainer">
        <div className="playernameAndprofile">
            <div className="playerName">{props.name}</div>
            <div className="playerProfile"><img src={profile} height={60}></img></div>
        </div>
      <div className="dice"><img src={three} height={90}></img></div>
    </div>
  )
};

export default player;
