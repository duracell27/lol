import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "./globalContext";
import { globalReducer } from "./globalReducer";
import { useReducer } from "react";
import { ADD_EXP, ADD_GOLD, REMOVE_GOLD, SET_DEFAULT_MANUR, SET_DEFAULT_PLANT, SET_LVL_PERCENT, UP_LVL } from "../types";
import { authContext } from "../auth/authContext";
import { useHttp } from "../../hooks/http.hook";


export const GlobalState = ({ children }) => {
  const {userId} = useContext(authContext)
  const { request } = useHttp()

  const [lol, setlol] = useState(1)
  const getInfo = async() => {
    try {
      console.log('here')
      const data = await request("api/auth/userInfo", "GET", {userId});
      console.log('here1')
      console.log(data);
      console.log('here2')
    } catch (error) {}
  }
  useEffect(()=>{
    getInfo()
  },[])
  const initialState = {
    gold: 1000,
    exp: 0,
    lvl: 1,
    lvlPercent: 0,
    defPlant: null,
    defManuring: null,
  };

  const upLvl = {
    1: 500,
    2: 800,
    3: 1300,
    4: 1200,
    5: 2000,
    6: 3000,
    7: 5000,
    8: 9000,
    9: 15000,
    10: 25000
  }

  const [state, dispatch] = useReducer(globalReducer, initialState);
 
  const setActivePlant = (activePlant) => {
    dispatch({type: SET_DEFAULT_PLANT, activePlant})
  }

  const setActiveManur = (activeManur) => {
    dispatch({type: SET_DEFAULT_MANUR, activeManur})
  }

  const addExp = (exp)=>{
    let newExp = state.exp + exp
    if(newExp > upLvl[state.lvl]){
      newExp -= upLvl[state.lvl]
      lvlUp()
    }
    const percent = Math.floor(newExp*100/upLvl[state.lvl])
    setlvlPercent(percent)
    dispatch({type: ADD_EXP, newExp})
  }

  const lvlUp = () => {
    dispatch({type: UP_LVL})
  }

  const setlvlPercent = (percent) => {
    dispatch({type: SET_LVL_PERCENT, percent})
  }

  const addGold = (gold) => {
    dispatch({type: ADD_GOLD, gold})
  }

  const removeGold = (gold) => {
    if(state.gold - gold > 0){
      dispatch({type: REMOVE_GOLD, gold})
      return true
    }else{
      alert('У вас не достатньо грошей')
      return false
    }    
  }

  return (
    <GlobalContext.Provider
      value={{
        gold: state.gold,
        exp: state.exp,
        expNext: upLvl[state.lvl],
        lvl: state.lvl,
        defPlant: state.defPlant,
        defManuring: state.defManuring,
        lvlPercent: state.lvlPercent,
        setActivePlant,
        setActiveManur,
        addExp,
        addGold,
        removeGold
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
