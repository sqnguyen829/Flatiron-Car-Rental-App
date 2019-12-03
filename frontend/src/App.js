import React from 'react';
import './App.css';
import MainContainer from './containers/MainContainer'
// npm install --save react-router-dom
//type the next line in terminal to use semantic ui
//npm install --save semantic-ui-css
import 'semantic-ui-css/semantic.min.css';

export default class App extends React.Component {
  render(){
    return(
      <div>
        <MainContainer/>
      </div>
    )
  }
}