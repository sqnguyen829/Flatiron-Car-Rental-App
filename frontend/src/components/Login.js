import React from 'react';
//https://semantic-ui.com/examples/login.html

export default function Login(){
    return(
        <div class="ui middle aligned center aligned grid">
            Login container start
            <div class="column">
                <h2 class="ui teal image header">
                <img src="assets/images/logo.png" class="image" alt=""></img>
                <div class="content">
                    Log-in to your account
                </div>
                </h2>
                <form class="ui large form">
                    <div class="ui stacked segment">
                        <div class="field">
                            <div class="ui left icon input">
                                <i class="user icon"></i>
                                <input type="text" name="username" placeholder="User name"></input>
                            </div>
                        </div>
                        <div class="field">
                            <div class="ui left icon input">
                                <i class="lock icon"></i>
                                <input type="password" name="password" placeholder="Password"></input>
                            </div>
                        </div>
                        <div class="ui fluid large teal submitt button">Login</div>
                    </div>
                    <div class="ui error message"></div>
                </form>
                <div class="ui message">
                    New to us? 
                    <a href="#"> Sign Up</a>
                </div>
            </div>
            Login container end
        </div>
    )
}