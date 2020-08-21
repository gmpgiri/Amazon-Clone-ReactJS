import React, {createContext, useContext, useReducer} from 'react';

//This is the DATA LAYER
export const StateContext = createContext();

//This is the Provider
export const StateProvider = ({ reducer, initialState, children}) =>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>   
    {children}
    </StateContext.Provider>
);


//this is how u use it inside a component
export const useStateValue = () => useContext(StateContext);
