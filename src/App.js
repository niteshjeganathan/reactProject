import './App.css';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import React, {Component} from 'react'
import {Routes, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className = "app">
        <NavigationBar/>
        <div className = "container">
          <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/about" element = {<About/>}/>
            <Route path = "/login" element = {<Login/>}/>
          </Routes>
        </div>
      </div>
    )
  }
}

export default App;
