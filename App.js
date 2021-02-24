import React, {useState} from 'react';
import Navigation from './source/navigation/navigation';
import Context from './source/Context';
export default function App(){
const[context,setContext]=useState([])
return(
<Context.Provider value={[context,setContext]}>
<Navigation/>
</Context.Provider>
)
}
