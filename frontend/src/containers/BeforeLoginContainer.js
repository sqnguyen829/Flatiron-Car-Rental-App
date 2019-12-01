import React from 'react';
import Login from '../components/Login'
import SignUp from '../components/SignUp'
export default class BeforLoginContainer extends React.Component {
  render(){
    return(
      <div>
          BeforLoginContainer
          <Login/>
          <SignUp/>
      </div>
    )
  }
}