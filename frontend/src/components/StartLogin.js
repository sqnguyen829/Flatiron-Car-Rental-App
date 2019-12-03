import React from 'react';

export default class StartLogin extends React.Component {

    redirectToLogin = () => {
        this.props.history.push('/login')
    }
    
    render(){
        return(
            <div>
                <button onClick={()=>this.redirectToLogin()}>Go to Login page</button>
            </div>
        )
    }
}