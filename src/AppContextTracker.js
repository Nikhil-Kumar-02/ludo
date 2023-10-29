import React, { createContext, useState } from "react"
import greenbead1 from './img/green.png'
import greenbead2 from './img/green.png'
import greenbead3 from './img/green.png'
import greenbead4 from './img/green.png'
import bluebead1 from './img/blue.png'
import bluebead2 from './img/blue.png'
import bluebead3 from './img/blue.png'
import bluebead4 from './img/blue.png'
import redbead1 from './img/red.png'
import redbead2 from './img/red.png'
import redbead3 from './img/red.png'
import redbead4 from './img/red.png'
import yellowbead1 from './img/yellow.png'
import yellowbead2 from './img/yellow.png'
import yellowbead3 from './img/yellow.png'
import yellowbead4 from './img/yellow.png'

export const AppContext = createContext();

function AppContextTracker({children}) {

    const [currPlayer , setCurrPlayer] = useState(0);
    const [currDicePos , setCurrDicePos] = useState(null);

    const [bead , setBead] = useState([-1,-1,-1,-1 , -1,-1,-1,-1 , -1,-1,-1,-1 , -1,-1,-1,-1]);
    const [beadColor , setBeadColor] = useState([`${redbead1}`,`${redbead2}`,`${redbead3}`,`${redbead4}`,
                                              `${bluebead1}`,`${bluebead2}`,`${bluebead3}`,`${bluebead4}`,
                                              `${yellowbead1}`,`${yellowbead2}`,`${yellowbead3}`,`${yellowbead4}`,
                                              `${greenbead1}`,`${greenbead2}`,`${greenbead3}`,`${greenbead4}`])

    const value = {
        currPlayer,
        setCurrPlayer, 
        currDicePos, 
        setCurrDicePos,
        bead,
        setBead,
        beadColor
    }

  return (
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  )
};

export default AppContextTracker;
