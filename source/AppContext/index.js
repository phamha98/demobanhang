import React, { createContext, useState } from 'react';
const AppContext = createContext();
const AppProvider = (props) => {
 
  const [theme, setTheme] = useState({
    is: true,
    light: {
      backgroundColor: '#90A6A7',
      color: '#000',
      backgroundBox:'#FDFDFD',
      backgroundWhite:'#fff'
    },
    dark: {
      backgroundColor: '#584343',
      color: '#fff',
      backgroundBox:'#0C0B25',
      backgroundBlack:'#412424'
    },
  });
  const [acount,setAcount]=useState({});
  const [productArray, setProductArray] = useState([]);
  const [notify,setNotify]=useState([]);
  const [status,setStatus]=useState([]);
  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        acount,
        setAcount,
        productArray,
        setProductArray,
        notify,setNotify,
        status,setStatus
      }}>
      {props.children}
    </AppContext.Provider>
  );
};
export { AppProvider, AppContext };
