import React,{useReducer} from "react"

export default (reducer,functions,initialValue)=>{
    const Context=React.createContext();
    const Provider=({children})=>{
        const [state,dispatch]=useReducer(reducer,initialValue);
        let boundfunctions={};
        for (let i in functions){
            boundfunctions[i]=functions[i](dispatch);
        }
        return (<Context.Provider value={{state,...boundfunctions}}>
            {children}
        </Context.Provider>);
    };
    return {Provider, Context};
}