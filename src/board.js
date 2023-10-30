import React, { useContext } from "react"
import './board.css'
import Player from './player'
import { AppContext } from "./AppContextTracker"


const Board = (props) => {

    const {bead , setBead , currPlayer , currDicePos , beadColor , beadClicked , setBeadClicked , setDiceRolled , diceRolled} = useContext(AppContext);

    const player = ['red' , 'blue' , 'yellow' , 'green' ];

    function placeBead(){
        //go to every beadnumber in bead array if not -1 then it will be somewhere in the board
        //so place the bead at that position on the board by targetting it with the classname 
        //and then placing that index bead with that index photo in the beadColor

        for(let i=0;i<16;i++){
            //if value is not -1 then it is on the board
            console.log(bead[i]);
            if(bead[i] !== -1){
                //create the classname and target it
                const createdClass = "cellnumber" + bead[i];
                console.log(createdClass);  
                const targetElement = document.querySelector(`.${createdClass}`);
                console.log(targetElement);
                

                // Create an image element
                const imageElement = document.createElement("img");

                // Set the source (src) attribute of the image element to the URL of your image
                imageElement.src = beadColor[i]; 

                // You can also set other attributes of the image element if needed, like alt text, width, height, etc.
                imageElement.alt = "";
                imageElement.height = 33; // Set the height as needed

                // Append the image element to the target element
                if(targetElement !== null){
                    console.log(targetElement.childNodes);
                    if(targetElement.childNodes.length !== 0){
                        continue;
                    }
                    targetElement.appendChild(imageElement);
                }
                console.log(imageElement);

            }
        }
    }
    placeBead();



    let currBead = document.querySelectorAll(`.${player[currPlayer]} .square`);

    if(diceRolled && currBead !== null){
        console.log("dice number is " , currDicePos);
        for(let i=0;i<4;i++){
            if(currDicePos === 5 && bead[currPlayer*4 + i] === -1){
                currBead[i].classList.add('addAnimation');
                currBead[i].addEventListener( 'click' , eventlistenerhandler);
            }
        }
    }
    
    function eventlistenerhandler(e){
        console.log(e.target);
        console.log(e.target.parentElement);
        console.log(e.target.parentElement.classList);
        const target = e.target.parentElement.classList[1].split('-')[1];
        let offset = 0;
        if(target === 'one'){
            offset = 0;
        }
        else if(target === 'two'){
            offset = 1;
        }
        else if(target === 'three'){
            offset = 2;
        }
        else{
            offset = 3;
        }

        for(let i=0;i<4;i++){
            currBead[i].classList.remove('addAnimation');
        }

        setBeadClicked(true);

        console.log(target , offset);
        const playerInitailPos = [56 , 41 , 20 , 2];
        setBead( (prev) => {
            prev[currPlayer*4 + offset] = playerInitailPos[currPlayer];
            return [...prev];
        } );

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
