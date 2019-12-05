import React from 'react';


export default function CarCard(props){
    return(
        <div>
            <div className="ui link cards">
                <div className="card">
                    <div className="imageContainer">
                        <img alt="card car" className= "image" src={props.car.image} ></img>
                    </div>
                    <div className="content">
                        <ul>{props.car.make}</ul>
                        <ul>{props.car.model}</ul>
                        <ul>{props.car.price} points/day</ul>
                    </div>
                    <div className="extra content">
                        <span className="right floated">
                            {props.car.year}
                        </span>
                        <span>
                            <i className="star icon"></i>
                                {props.car.rating}/5
                        </span>
                    </div>
                    <div class="extra content">
                        {props.handleShowCar ? 
                            <button onClick={()=>props.handleShowCar(props.car)}>More Detail</button> 
                            : props.handleRemoveCar ?
                            <button onClick={()=>props.handleRemoveCar(props.car)}>Return Car</button> 
                            : ''
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}