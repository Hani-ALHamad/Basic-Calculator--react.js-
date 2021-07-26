import React, { useContext } from 'react'
import Display from './Display'
import Buttons from './Buttons'
import { AppContext } from './context'
import { AiOutlineFullscreen} from 'react-icons/ai'


const App = () => {
  const {fullscreen, changeFullscreen} = useContext(AppContext)
  return(
      <main>
      {fullscreen === "" ?
        <div className="title_button">
          <button className="fullscreen_button" 
          onClick={() => changeFullscreen("fullscreen")}>FULLSCREEN <AiOutlineFullscreen /></button>
          <div className="title">CALCULATOR</div>
        </div>
      : 
      <>
      </>
      }
      
        <div className="box">
          <Display />
          <Buttons />
        </div>
      </main>
  )
}

export default App