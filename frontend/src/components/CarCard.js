import React from 'react';


export default function CarCard(props){
    // const RemoveCar = () => props.handleRemoveCar ?
    //     <button onClick={()=>props.handleRemoveCar(props.car)}>Return Car</button> 
    //     : <div></div>
    return(
        <div>
            <div class="ui link cards">
                <div class="card">
                    <div class="image">
                        <img src={props.car.image}></img>
                    </div>
                    <div class="content">
                        <ul>{props.car.make}</ul>
                        <ul>{props.car.model}</ul>
                        <ul>{props.car.price} points/day</ul>
                    </div>
                    <div class="extra content">
                        <span class="right floated">
                            {props.car.year}
                        </span>
                        <span>
                            <i class="star icon"></i>
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