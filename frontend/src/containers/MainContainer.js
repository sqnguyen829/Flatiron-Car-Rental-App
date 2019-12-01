import React from 'react';
import BeforeLoginContainer from './BeforeLoginContainer'
import AfterLoginContainer from './AfterLoginContainer'

export default class MainContainer extends React.Component {
  render(){
    return(
      <div>
          MainContainer
        <BeforeLoginContainer/>
        <AfterLoginContainer/>
      </div>
    )
  }
}