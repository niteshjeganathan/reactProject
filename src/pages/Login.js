import React, { Component } from 'react'

class Login extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       username : "",
       password : "", 
       login : false
    }
  }


  usernameChanged = (event) => this.setState({username : event.target.value})
  passwordChanged = (event) => this.setState({password : event.target.value})

  onSubmitClicked = () => {
    if(this.state.username === "Nitesh" && this.state.password === "root") {
      alert("Login In Sucessful")
    } else {
      if(this.state.username === "Nitesh") {
        this.setState({password : ""})
      } else {
        this.setState({username : ""})
        this.setState({password : ""})
      }
      alert("Wrong Credentials");
    }
  }

  render() {
    return (
    <div className = "loginBox">
      <form className = "inputBox">
        <div className = "usernameBox">
          <label className = "label">Username:</label>
          <input className = "input" type = "text" value = {this.state.username} onChange = {this.usernameChanged}/>
        </div>

        <div className = "passwordBox">
          <label className = "label">Password:</label>
          <input className = "input" type = "password" value = {this.state.password} onChange = {this.passwordChanged}/>
        </div>
      </form>

      <button onClick = {this.onSubmitClicked}>Submit</button>
    </div>
    ) 
  }
}

export default Login