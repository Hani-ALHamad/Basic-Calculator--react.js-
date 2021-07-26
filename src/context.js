import React, { createContext, useReducer, useEffect, useState, useCallback } from 'react'
import reducer from './reducer'

export const AppContext = createContext()
// initial state of the calculator
const initialState = {
  result: "",
  calculated:0,
  allowSignChange: true,
  history: "",
  second: "",
  sign: "",
  isNumber: true,
  numberCounter: true,
  afterOperation: false,
  firstTime: true
}

const operations = ['+', '-', '*', '/', "Enter"]
const others = ['.', '±',"Backspace", "Clear"]

// main context and useReducer
const Context = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [input, changeInput] = useState([])
  const [counter, changeCounter] = useState(0)
  const [fullscreen, changeFullscreen] = useState("")

  // the function that handles number inputs
  const handleNumber = useCallback(() => {
    dispatch({type: "NUMBER", result: input[0]})
    if(!state.firstTime){
      state.numberCounter = true
    }
  }, [input])

  // the function that handles + - / *
  const handleOperation = useCallback(() => {
    if (state.allowSignChange || !state.numberCounter) {
        state.sign = input[0]
        state.allowSignChange = false
    }
    
    if(state.isNumber){
      state.isNumber = false
      state.afterOperation = true
      changeCounter(counter + 1)
    }

    if (state.firstTime && state.result !== "") {
      state.calculated = state.result
      state.firstTime = false
      state.history = state.result
    }
  }, [input, state.allowSignChange])

  // function that sorts out whether the input was a number or sign, keyboard or mouse click...
  const handleKeyDown = (e) => {
    if(typeof(e) === "object"){
      if (String(parseInt(e.key)) !== "NaN") {
        changeInput([e.key, "number"])
      } else if(operations.includes(e.key)){
        changeInput([e.key, "sign"])
      } else if(others.includes(e.key)){
        dispatch({type: e.key})
      }
    } else {
      if (String(parseInt(e)) !== "NaN") {
        changeInput([e, "number"])
      } else if(operations.includes(e)){
        changeInput([e, "sign"])
      } else if (others.includes(e)) {
        dispatch({ type: e })
      }
    }
  }

  // clear button
  const handleClear = (e) => {
    if (e.detail  !== 0){
      console.log(e)
      dispatch({ type: "Clear" })
      changeInput([])
      changeCounter(0)
    }
  }

  // resize function, to detirmin whether they shold be vertical or horizontal
  const handleResize = () => {
    if ((fullscreen !== "")){
      if (window.innerWidth / window.innerHeight >= 1.25){
        changeFullscreen("fullscreen")
      } else {
        changeFullscreen("fullscreen_v")
      }
    }
  }


  //  main useEffect, responsible for main operations dispatch and counter, not the best 😅
  useEffect(() => {
    if(input[1] === "number"){
      handleNumber()
    } else {
      handleOperation()
    }

    if ((counter === 2)) { 
      changeCounter(1)
      state.second = state.result
      dispatch({ type: state.sign })
      state.allowSignChange = true
      state.numberCounter = false
    }
  }, [input, handleNumber, handleOperation, counter, state.sign])


  useEffect(() => {
    document.documentElement.className = fullscreen
  }, [fullscreen])

  // event listener useEffect 
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <AppContext.Provider value={{
      state, 
      changeFullscreen, 
      fullscreen, 
      handleKeyDown, 
      handleClear
      }}>
      {children}
    </AppContext.Provider>
  )
}

export default Context