import React, { useContext } from "react"
import { AppContext } from "./AppContextTracker"
import './player.css'
import profile from './img/profile.jpg'
import one from './img/one.jpeg'
import two from './img/two.jpeg'
import three from './img/three.jpeg'
import four from './img/four.jpeg'
import five from './img/five.jpeg'
import six from './img/six.jpeg'

const Player = (props) => {
  
  const {currPlayer , setCurrPlayer , currDicePos , setCurrDicePos} = useContext(AppContext);
  
  const diceImg = [`${one}` , `${two}` , `${three}` , `${four}` , `${five}` , `${six}`];

  function togglePlayer() {
    setCurrPlayer((prev) => {
        return (
            prev = (prev+1)%4
        );
    })
  }

  function toggleDice(){
    const number = Math.floor(Math.random()*6);
    setCurrDicePos(number);
    if(number != 5){
      togglePlayer();
    }
  }

  const allPlayers = ["Player Red" , "Player Blue" , "Player Yellow" , "Player Green"];
  const CurrentPlayer = allPlayers[currPlayer];

  return (
    <div className="playerContainer">
        <div className="playernameAndprofile">
            <div className="playerName">{props.name}</div>
            <div className="playerProfile"><img src={profile} alt="profilePicture" height={60}></img></div>
        </div>
      <div className="dice">{
          CurrentPlayer===props.name && 
          <img src={currDicePos===null?two:diceImg[currDicePos]} height={90} alt="dice" onClick={toggleDice}></img>
        }</div>
    </div>
  )
};

export default Player;
