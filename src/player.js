import React from "react"
import './player.css'
import profile from './img/profile.jpg'

const player = (props) => {
  return (
    <div className="playerContainer">
        <div className="playernameAndprofile">
            <div className="playerName">{props.name}</div>
            <div className="playerProfile"><img src={profile} height={60}></img></div>
        </div>
      <div className="dice"></div>
    </div>
  )
};

export default player;
