import React, { useContext } from 'react'
import { AppContext } from './context'
import { AiOutlineFullscreenExit } from 'react-icons/ai'

const  Display = () => {
  const {state, changeFullscreen, fullscreen} = useContext(AppContext)
  return (
    <div className="display">
      <div className="display_history">
        {state.history}
      </div>
      <div className="display_result">{state.result.length !== 0 ? state.result : 0}</div>
      {fullscreen !== "" ?
        <div className="title_button" style={{ position: "absolute", left: "0", bottom: "0" }}>
          <button className="fullscreen_button" 
          onClick={() => changeFullscreen("")}>BACK TO NORMAL <AiOutlineFullscreenExit /></button>
          <div className="title">CALCULATOR</div>
        </div>
        :
        <></>
      }

    </div>
  )
}

export default Display