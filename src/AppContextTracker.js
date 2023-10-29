import React, { createContext, useState } from "react"

export const AppContext = createContext();

function AppContextTracker({children}) {

    const [currPlayer , setCurrPlayer] = useState(0);

    const value = {
        currPlayer ,
        setCurrPlayer
    }

  return (
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  )
};

export default AppContextTracker;
