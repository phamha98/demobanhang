import React, {useState} from 'react';
import Navigation from './source/navigation';
import Context from './source/Context';
export default function App(){
const[context,setContext]=useState([])
return(
<Navigation/>
)
}
// import { createContext } from 'react';
// const StoreContext = createContext(null);
// export default StoreContext;
{/* <Context.Provider value={[context,setContext]}>
<Navigation/>
</Context.Provider> */}