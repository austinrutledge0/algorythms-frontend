import React from 'react'
import './App.css'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import SideBar from './components/SideBar/SideBar'
import { Footer } from './Footer'
import Routes from './Routes'
const history = createBrowserHistory()

const App = () => {
  return (
    <div className="App">
      <Router history={history}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <SideBar />
          <div style={{padding: 10}}>
          <Routes />
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
