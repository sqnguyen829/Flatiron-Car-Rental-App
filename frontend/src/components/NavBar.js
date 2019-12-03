import React from 'react';
export default class NavBar extends React.Component {

    redirectToLogin = () => {
        localStorage.clear()
        this.props.history.push('/login')
    }

    render(){
    return(
        <div className="ui inverted teal menu">
            <a className="item">
                <h2 className="ui header">
                    <i className="car icon" />
                    <div className="content">Home</div>
                </h2>
            </a>
            <a className="item">
                <h2 className="ui header">
                    <i className="car icon" />
                    <div className="content">My Cars</div>
                </h2>
            </a>
            <a className="item">
                <h2 className="ui header">
                    <i className="car icon" />
                    <div className="content">My Rented Cars</div>
                </h2>
            </a>
            <a className="item">
                <h2 className="ui header">
                    <i className="car icon" />
                    <div className="content">Add Car to Service</div>
                </h2>
            </a>
            <a className="item" onClick={()=>this.redirectToLogin()}>
                <h2 className="ui header">
                    <i className="close icon" />
                    <div className="content" >Log Out</div>
                </h2>
            </a>
        </div>
    )
    }
}