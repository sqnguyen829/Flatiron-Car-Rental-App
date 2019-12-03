import React from 'react';
import AfterLoginContainer from './AfterLoginContainer'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Login from '../components/Login'
import SignUp from '../components/SignUp'

export default class MainContainer extends React.Component {
  
  render(){
    return(
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/flatironrental" component={AfterLoginContainer} history={this.props.history}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}