import React, { useState } from "react";
import Navigation from "./source/navigation";
import { useLinkBuilder } from "@react-navigation/native";
import {AppProvider} from './source/AppContext';
export default function App() {
 //const [context, setContext] = useState([]);//tao ra kho du l
 
  return (
    <AppProvider>
      <Navigation />
    </AppProvider>
  );
}
// import { createContext } from 'react';
// const StoreContext = createContext(null);
// export default StoreContext;
 
//   /* <Context.Provider value={[context,setContext]}>
// <Navigation/>
// </Context.Provider> */
// context: gia tri kho du ll
//
 
