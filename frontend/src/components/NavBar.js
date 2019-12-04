import React from 'react';
import {Link} from 'react-router-dom'
export default class NavBar extends React.Component {

    redirectToLogin = () => {
        localStorage.clear()
        this.props.history.push('/login')
    }

    render(){
    return(
        <div className="ui inverted teal menu">
            <a className="item" onClick={()=>this.props.history.push('/flatironrental/cars')}>
                <h2 className="ui header">
                    <i className="car icon" />
                    <div className="content">Home</div>
                </h2>
            </a>
            <a className="item" onClick={()=>this.props.history.push('/flatironrental/cars/owned')}>
                <h2 className="ui header">
                    <i className="car icon" />
                    <div className="content">My Cars</div>
                </h2>
            </a>
            <a className="item" onClick={()=>this.props.history.push('/flatironrental/cars/rented')}>
                <h2 className="ui header">
                    <i className="car icon" />
                    <div className="content">My Rented Cars</div>
                </h2>
            </a>
            <a className="item">
                <h2 className="ui header">
                    <i className="car icon" />
                    <div className="content" onClick={()=>this.props.history.push('/flatironrental/cars/new')}>Add Car to Service</div>
                    {/* <Link to = {'/flatironrental/cars/new'}>Add Car to Service</Link> */}
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