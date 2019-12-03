import React from 'react';
const userURL = 'http://localhost:3000/api/v1/users/'

export default class SignUp extends React.Component {

    redirectToLogin = () => {
        this.props.history.push('/login')
    }
    
    handleNewUser = (e) => {
        e.preventDefault()
        fetch(userURL, {
          method: 'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "user": {
              username: e.target[0].value,
              firstname: e.target[1].value,
              lastname: e.target[2].value,
              password: e.target[3].value,
              point: e.target[4].value,
              email: e.target[5].value
            }
          })
        },()=>this.redirectToLogin())
    }
    render(){
        return(
            <div>
                <form class="ui form" onSubmit={(e)=>this.handleNewUser(e)}>
                    <div class="field">
                        <label>User Name</label>
                        <input type="text" name="username" placeholder="User name"></input>
                    </div>
                    <div class="field">
                        <label>First Name</label>
                        <input type="text" name="firstname" placeholder="First Name"></input>
                    </div>
                    <div class="field">
                        <label>Last Name</label>
                        <input type="text" name="lastname" placeholder="Last Name"></input>
                    </div>
                    <div class="field">
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Password"></input>
                    </div>
                    <div class="field">
                        <label>Point</label>
                        <input type="text" name="point" placeholder="Points"></input>
                    </div>
                    <div class="field">
                        <label>Email Address</label>
                        <input type="text" name="email" placeholder="Email"></input>
                    </div>
                    <button class="ui green button" type="submit"  >Submit</button>
                    <button class="ui blue button"  onClick={()=>this.redirectToLogin()} >Back to login</button>
                </form>
            </div>
        )
    }
}