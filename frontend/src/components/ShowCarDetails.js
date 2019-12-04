import React from 'react';

export default function ShowCarDetails(props){
    return(
        <div class="ui items">
            <div class="item">
            <div class="ui medium image">
                <img src={props.car.image}></img>
            </div>
            <div class="content">
                <div class="header"> {props.car.make} {props.car.model}</div>
                    <div class="meta">
                        <span class="price">$1200</span>
                        <span class="stay">1 Month</span>
                    </div>
                    <div class="description">
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    )
}