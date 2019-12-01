import React from 'react';

export default function SignUp(){
    return(
        <div>
            Sign up form start
            <form class="ui form">
            <div class="field">
                    <label>User Name</label>
                    <input type="text" name="username" placeholder="User name"></input>
                </div>
                <div class="field">
                    <label>First Name</label>
                    <input type="text" name="first-name" placeholder="First Name"></input>
                </div>
                <div class="field">
                    <label>Last Name</label>
                    <input type="text" name="last-name" placeholder="Last Name"></input>
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
                <button class="ui button" type="submit">Submit</button>
            </form>
            Sign up form end
        </div>
    )
}