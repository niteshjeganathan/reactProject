import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class navigationBar extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       user: "Guest",
       loggedIn: props.loggedIn
    }
  }
  render() {
    return (
      <nav className = "navBar">
        <ul>
            <li>
                <Link to = "/" className = "Pages Home">
                    <div>Home</div>
                </Link>
            </li>
            <li>
                <Link to = "/about" className = "Pages About">
                    About
                </Link>
            </li>
            <li>
                <Link to = "/login" className = "Pages Login">
                    Sign Up/Login
                </Link>
            </li>
        </ul>
      </nav>
    )
  }
}
export default navigationBar