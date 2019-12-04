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
            localStorage.username = userInfo.username
            localStorage.point= userInfo.point
            localStorage.id=userInfo.id
            localStorage.token = userInfo.token
            if(userInfo.token){
                this.props.history.push('/flatironrental/cars')
            }
        })
    }

    render(){
        return(
            <div className="ui middle aligned center aligned grid">
                <div className="column">
                    <h2 className="ui teal image header">
                    <img src="assets/images/logo.png" className="image" alt=""></img>
                    <div className="content">
                        Log-in to your account
                    </div>
                    </h2>
                    <form className="ui large form" onSubmit={(e)=>this.login(e)}>
                        <div className="ui stacked segment">
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="user icon"></i>
                                    <input type="text" name="username" onChange={(e)=>this.handleChange(e)} placeholder="User name"></input>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="lock icon"></i>
                                    <input type="password" name="password" onChange={(e)=>this.handleChange(e)} placeholder="Password"></input>
                                </div>
                            </div>
                            <button className="ui fluid large teal submit button" type="submit" >Login</button>
                        </div>
                        <div className="ui error message"></div>
                    </form>
                    <div className="ui message">
                        New to us? 
                        <a  onClick={()=> this.handleSignup()}> Sign Up</a>
                    </div>
                </div>
            </div>
        )
    }
}