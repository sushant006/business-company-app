import React, { useContext ,useEffect,useReducer} from "react";
import reducer from './reducer';

const AppContext = React.createContext();

const initialState = {
    name:"",
    image:""
};

const AppProvider = ({children})=>{
    const[state,dispatch] = useReducer(reducer,initialState);
    const updateHomePage = () => {
      return dispatch({
        type: "HOME_UPDATE",
        payload: {
          name: "Pathak Technical ",
          image: "./images/solution.jpg",
        },
      });
    };

    const udpateAboutPage = () => {
      return dispatch({
        type: "ABOUT_UPDATE",
        payload: {
          name: "Sushant Pathak",
          image: "./images/hero.jpg",
        },
      });
    };

   
    return <AppContext.Provider value ={{...state,updateHomePage, udpateAboutPage}}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext  = ()=>{
    return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobalContext};