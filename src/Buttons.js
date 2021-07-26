import React, { useContext } from 'react'
import {BsBackspace} from 'react-icons/bs'
import { AppContext } from './context'

const Buttons = () => {
  const {handleKeyDown, handleClear} = useContext(AppContext)
  return(
    <div className="buttons">
      <div className="buttons_first">
        <button className="clear" 
          onClick={(e) => handleClear(e)}>Clear</button>
        <button className="blue"
          onClick={(e) => handleKeyDown("Backspace")}><BsBackspace /></button>
        <button className="blue" 
          onClick={(e) => handleKeyDown("/")}>÷</button>
      </div>
      <div className="buttons_second">
        <button className="white" 
          onClick={(e) => handleKeyDown(7)}>7</button>
        <button className="white"
          onClick={(e) => handleKeyDown(8)}>8</button>
        <button className="white" 
          onClick={(e) => handleKeyDown(9)}>9</button>
        <button className="blue" 
          onClick={(e) => handleKeyDown("*")}>×</button>
        <button className="white" 
          onClick={(e) => handleKeyDown(4)}>4</button>
        <button className="white" 
          onClick={(e) => handleKeyDown(5)}>5</button>
        <button className="white" 
          onClick={(e) => handleKeyDown(6)}>6</button>
        <button className="blue" 
          onClick={(e) => handleKeyDown("-")}>−</button>
        <button className="white" 
          onClick={(e) => handleKeyDown(1)}>1</button>
        <button className="white" 
          onClick={(e) => handleKeyDown(2)}>2</button>
        <button className="white" 
          onClick={(e) => handleKeyDown(3)}>3</button>
        <button className="blue" 
          onClick={(e) => handleKeyDown("+")}>+</button>
        <button className="blue" 
          onClick={(e) => handleKeyDown("±")}>±</button>
        <button className="white" 
          onClick={(e) => handleKeyDown(0)}>0</button>
        <button className="blue" 
          onClick={(e) => handleKeyDown(".")}>.</button>
        <button className="blue" 
          onClick={(e) => handleKeyDown("Enter")}>=</button>
      </div>
    </div>
  )
}

export default Buttons