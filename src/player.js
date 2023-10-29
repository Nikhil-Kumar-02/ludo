import React from "react"
import './player.css'
import profile from './img/profile.jpg'
import three from './img/three.jpeg'

const Player = (props) => {
  const CurrentPlayer = props.CurrentPlayer;
  return (
    <div className="playerContainer">
        <div className="playernameAndprofile">
            <div className="playerName">{props.name}</div>
            <div className="playerProfile"><img src={profile} alt="profilePicture" height={60}></img></div>
        </div>
      <div className="dice">{
          CurrentPlayer===props.name && 
          <img src={three} height={90} alt="dice"></img>
        }</div>
    </div>
  )
};

export default Player;
