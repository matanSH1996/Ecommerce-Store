import React from 'react'
import {createContext, useContext, useReducer} from 'react'

//prepare react context
export const MyContext = createContext();

//wrap our app and provide the Context to App's components (will be define by "children" prop)
export const StateProvider = ({reducer, initialState, children}) => (
    <MyContext.Provider 
    value={useReducer(reducer,initialState)}>
        {children}
    </MyContext.Provider>
);

//allow to pull information from the context
export const useStateValue = () => useContext(MyContext)