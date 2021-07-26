import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.js'
import Context, { AppContext } from './context'

ReactDOM.render(
    <Context>
        <App />
    </Context>
, document.getElementById("root"))
