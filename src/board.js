import React, { useContext } from "react"
import './board.css'
import Player from './player'
import { AppContext } from "./AppContextTracker"


const Board = (props) => {

    const {bead , setBead , currPlayer , currDicePos , beadColor} = useContext(AppContext);
    const player = ['red' , 'blue' , 'yellow' , 'green' ]

    let currBead = document.querySelectorAll(`.${player[currPlayer]} .square`);

    if(currBead !== null){
        console.log("dice number is " , currDicePos);
        for(let i=0;i<4;i++){
            if(currDicePos === 5 && bead[currPlayer*4 + i] === -1){
                currBead[i].classList.add('addAnimation');
            }
            else if(bead[currPlayer*4 + i] !== -1){
                currBead[i].classList.add('addAnimation');
            }
        }
    }

  return (
    <div className="boardContainer">    

    <div className="playergreen player">
        <Player name="Player Green" currBead={currBead}></Player>
    </div>
    <div className="playerred player">
        <Player name="Player Red" currBead={currBead}></Player>
    </div>
    <div className="playerblue player">
        <Player name="Player Blue" currBead={currBead}></Player>
    </div>
    <div className="playeryellow player">
        <Player name="Player Yellow" currBead={currBead}></Player>
    </div>
    
        <div className="game">
            <div className="house green">
                <div className="box">
                    <div className="square square-one green">{
                        bead[12] === -1 && <img alt="" src={beadColor[12]} height={33}></img>
                    }
                    </div>
                    <div className="square square-two green">{
                        bead[13] === -1 && <img alt="" src={beadColor[13]} height={33}></img>
                    }
                    </div>
                    <div className="square square-three green">{
                        bead[14] === -1 && <img alt="" src={beadColor[14]} height={33}></img>
                    }
                    </div>
                    <div className="square square-four green">{
                        bead[15] === -1 && <img alt="" src={beadColor[15]} height={33}></img>
                    }
                    </div>
                </div>
            </div>

            <div className="house yellow">
                <div className="box">
                    <div className="square square-one yellow">{
                            bead[8] === -1 && <img alt="" src={beadColor[8]} height={33}></img>
                            }
                    </div>
                    <div className="square square-two yellow">{
                            bead[9] === -1 && <img alt="" src={beadColor[9]} height={33}></img>
                            }
                    </div>
                    <div className="square square-three yellow">{
                            bead[10] === -1 && <img alt="" src={beadColor[10]} height={33}></img>
                            }
                    </div>
                    <div className="square square-four yellow">{
                            bead[11] === -1 && <img alt="" src={beadColor[11]} height={33}></img>
                            }
                    </div>
                </div>
            </div>

            <div className="house red">
                <div className="box">
                    <div className="square square-one red">{
                        bead[0] === -1 && <img alt="" src={beadColor[0]} height={33}></img>
                    }
                    </div>
                    <div className="square square-two red">{
                        bead[1] === -1 && <img alt="" src={beadColor[1]} height={33}></img>
                    }
                    </div>
                    <div className="square square-three red">{
                        bead[2] === -1 && <img alt="" src={beadColor[2]} height={33}></img>
                    }
                    </div>
                    <div className="square square-four red">{
                        bead[3] === -1 && <img alt="" src={beadColor[3]} height={33}></img>
                    }
                    </div>
                </div>
            </div>

            <div className="house blue">
                <div className="box">
                    <div className="square square-one blue">{
                        bead[4] === -1 && <img alt="" src={beadColor[4]} height={33}></img>
                    }
                    </div>
                    <div className="square square-two blue">{
                        bead[5] === -1 && <img alt="" src={beadColor[5]} height={33}></img>
                    }
                    </div>
                    <div className="square square-three blue">{
                        bead[6] === -1 && <img alt="" src={beadColor[6]} height={33}></img>
                    }
                    </div>
                    <div className="square square-four blue">{
                        bead[7] === -1 && <img alt="" src={beadColor[7]} height={33}></img>
                    }
                    </div>
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
