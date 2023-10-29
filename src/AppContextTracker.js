import React, { createContext, useState } from "react"

export const AppContext = createContext();

function AppContextTracker({children}) {

    const [currPlayer , setCurrPlayer] = useState(0);
    const [currDicePos , setCurrDicePos] = useState(null);

    const value = {
        currPlayer ,
        setCurrPlayer , 
        currDicePos , 
        setCurrDicePos
    }

  return (
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  )
};

export default AppContextTracker;
