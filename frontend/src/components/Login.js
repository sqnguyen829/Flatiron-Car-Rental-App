import React from 'react';

export default class Login extends React.Component {

    handleChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSignup = () => {
        this.props.history.push('/signup')
    }

    login = (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/api/v1/login",{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
          })
        })
        .then(res=> res.json())
        .then(userInfo => {
            localStorage.token = userInfo.token
            if(userInfo.token){
                this.props.history.push('/home')
            }
        })
    }

    render(){
        return(
            <div class="ui middle aligned center aligned grid">
                <div class="column">
                    <h2 class="ui teal image header">
                    <img src="assets/images/logo.png" class="image" alt=""></img>
                    <div class="content">
                        Log-in to your account
                    </div>
                    </h2>
                    <form class="ui large form" onSubmit={(e)=>this.login(e)}>
                        <div class="ui stacked segment">
                            <div class="field">
                                <div class="ui left icon input">
                                    <i class="user icon"></i>
                                    <input type="text" name="username" onChange={(e)=>this.handleChange(e)} placeholder="User name"></input>
                                </div>
                            </div>
                            <div class="field">
                                <div class="ui left icon input">
                                    <i class="lock icon"></i>
                                    <input type="password" name="password" onChange={(e)=>this.handleChange(e)} placeholder="Password"></input>
                                </div>
                            </div>
                            <button class="ui fluid large teal submit button" type="submit" >Login</button>
                        </div>
                        <div class="ui error message"></div>
                    </form>
                    <div class="ui message">
                        New to us? 
                        <a  onClick={()=> this.handleSignup()}> Sign Up</a>
                    </div>
                </div>
            </div>
        )
    }
}