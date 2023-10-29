import React from "react"
import './board.css'
import greenbead from './img/green.png'
import bluebead from './img/blue.png'
import redbead from './img/red.png'
import yellowbead from './img/yellow.png'
import Player from './player'


const Board = (props) => {
  return (
    <div className="boardContainer">    

    <div className="playergreen player">
        <Player name="Player Green"></Player>
    </div>
    <div className="playerred player">
        <Player name="Player Red"></Player>
    </div>
    <div className="playerblue player">
        <Player name="Player Blue"></Player>
    </div>
    <div className="playeryellow player">
        <Player name="Player Yellow"></Player>
    </div>
    
        <div className="game">
            <div className="house green">
                <div className="box">
                    <div className="square square-one green"><img alt="" src={greenbead} height={33}></img></div>
                    <div className="square square-two green"><img alt="" src={greenbead} height={33}></img></div>
                    <div className="square square-three green"><img alt="" src={greenbead} height={33}></img></div>
                    <div className="square square-four green"><img alt="" src={greenbead} height={33}></img></div>
                </div>
            </div>

            <div className="house yellow">
                <div className="box">
                    <div className="square square-one yellow"><img alt="" src={yellowbead} height={33}></img></div>
                    <div className="square square-two yellow"><img alt="" src={yellowbead} height={33}></img></div>
                    <div className="square square-three yellow"><img alt="" src={yellowbead} height={33}></img></div>
                    <div className="square square-four yellow"><img alt="" src={yellowbead} height={33}></img></div>
                </div>
            </div>

            <div className="house red">
                <div className="box">
                    <div className="square square-one red"><img alt="" src={redbead} height={33}></img></div>
                    <div className="square square-two red"><img alt="" src={redbead} height={33}></img></div>
                    <div className="square square-three red"><img alt="" src={redbead} height={33}></img></div>
                    <div className="square square-four red"><img alt="" src={redbead} height={33}></img></div>
                </div>
            </div>

            <div className="house blue">
                <div className="box">
                    <div className="square square-one blue"><img alt="" src={bluebead} height={33}></img></div>
                    <div className="square square-two blue"><img alt="" src={bluebead} height={33}></img></div>
                    <div className="square square-three blue"><img alt="" src={bluebead} height={33}></img></div>
                    <div className="square square-four blue"><img alt="" src={bluebead} height={33}></img></div>
                </div>
            </div>

            <div className="home"></div>
            
            <div className="cells cellnumber1"></div>
            <div className="cells cellnumber2 g-start"></div>
            <div className="cells cellnumber3"></div>
            <div className="cells cellnumber4"></div>
            <div className="cells cellnumber5"></div>
            <div className="cells cellnumber6"></div>

            <div className="cells cellnumber7"></div>
            <div className="cells cellnumber8"></div>
            <div className="cells cellnumber9 safe"></div>
            <div className="cells cellnumber10"></div>
            <div className="cells cellnumber11"></div>
            <div className="cells cellnumber12"></div>

            <div className="cells cellnumber13"></div>
            <div className="cells cellnumber14 yellow"></div>
            <div className="cells cellnumber15 yellow"></div>
            <div className="cells cellnumber16 yellow"></div>
            <div className="cells cellnumber17 yellow"></div>
            <div className="cells cellnumber18 yellow"></div>

            <div className="cells cellnumber19"></div>
            <div className="cells cellnumber20 y-start"></div>
            <div className="cells cellnumber21"></div>
            <div className="cells cellnumber22"></div>
            <div className="cells cellnumber23"></div>
            <div className="cells cellnumber24"></div>

            <div className="cells cellnumber25"></div>
            <div className="cells cellnumber26"></div>
            <div className="cells cellnumber27"></div>
            <div className="cells cellnumber28 safe"></div>
            <div className="cells cellnumber29"></div>
            <div className="cells cellnumber30"></div>

            <div className="cells cellnumber31 blue"></div>
            <div className="cells cellnumber32 blue"></div>
            <div className="cells cellnumber33 blue"></div>
            <div className="cells cellnumber34 blue"></div>
            <div className="cells cellnumber35 blue"></div>
            <div className="cells cellnumber36"></div>

            <div className="cells cellnumber37"></div>
            <div className="cells cellnumber38"></div>
            <div className="cells cellnumber39"></div>
            <div className="cells cellnumber40"></div>
            <div className="cells cellnumber41 b-start"></div>
            <div className="cells cellnumber42"></div>

            <div className="cells cellnumber43"></div>
            <div className="cells cellnumber44"></div>
            <div className="cells cellnumber45 safe"></div>
            <div className="cells cellnumber46"></div>
            <div className="cells cellnumber47"></div>
            <div className="cells cellnumber48"></div>

            <div className="cells cellnumber49"></div>
            <div className="cells cellnumber50 red"></div>
            <div className="cells cellnumber51 red"></div>
            <div className="cells cellnumber52 red"></div>
            <div className="cells cellnumber53 red"></div>
            <div className="cells cellnumber54 red"></div>

            <div className="cells cellnumber55"></div>
            <div className="cells cellnumber56 r-start"></div>
            <div className="cells cellnumber57"></div>
            <div className="cells cellnumber58"></div>
            <div className="cells cellnumber59"></div>
            <div className="cells cellnumber60"></div>

            <div className="cells cellnumber61"></div>
            <div className="cells cellnumber62"></div>
            <div className="cells cellnumber63"></div>
            <div className="cells cellnumber64 safe"></div>
            <div className="cells cellnumber65"></div>
            <div className="cells cellnumber66"></div>

            <div className="cells cellnumber67 green"></div>
            <div className="cells cellnumber68 green"></div>
            <div className="cells cellnumber69 green"></div>
            <div className="cells cellnumber70 green"></div>
            <div className="cells cellnumber71 green"></div>
            <div className="cells cellnumber72"></div>

        </div>
    </div>
  )
};

export default Board;
