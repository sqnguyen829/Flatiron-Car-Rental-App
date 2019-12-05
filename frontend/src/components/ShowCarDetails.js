import React from 'react';

export default function ShowCarDetails(props){
    return(
        <div class="ui items">
            {props.car? 
            <div>
                <div class="item">
                <div class="ui medium image">
                    <img src={props.car.image}></img>
                </div>
                <div class="content">
                    <div class="header"> {props.car.make} {props.car.model}</div>
                    <div class="meta">
                        <span class="price"></span>
                        <span class="stay">1 Month</span>
                    </div>
                    <div class="description">
                        <p></p>
                    </div>
                </div>
            </div>
            <form class="ui form" onSubmit={(e)=>props.handleRentCar(e)}>
                <div class="field">
                    <label>Start Date ex:08/10/19 should be 081019</label>
                    <input type="number" name="start_date" placeholder="start date" ></input>
                </div>
                <div class="field">
                    <label>End Date ex:08/12/19 should be 081219</label>
                    <input type="number" name="end_date" placeholder="end date" ></input>
                </div>
                <button class="ui button" type="submit">Submit</button>
            </form>
            </div>
            :
            ''
            }
            
        </div>
    )
}