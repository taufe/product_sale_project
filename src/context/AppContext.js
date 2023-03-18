import React, { createContext, useState } from "react";
export const AppContext = createContext({});
export const AppContextProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [icons, setIcons] = useState({});
  const [bookmarkedHotels, setBookmarkedHotels] = useState([]);
  const [bookmarkedStores, setBookmarkedStores] = useState([]);
  const [bookedmarkedSpots, setbookedmarkedSpots] = useState([]);

  const contextValue = {
    userName,
    setUserName,
    icons,
    setIcons,
    bookmarkedHotels,
    setBookmarkedHotels,
    bookmarkedStores,
    setBookmarkedStores,
    bookedmarkedSpots,
    setbookedmarkedSpots,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

