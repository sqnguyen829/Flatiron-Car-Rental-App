import React from 'react';

export default function AddCarForm(){
    return(
        <div>
            AddCar form start
            <form class="ui form">
            <div class="field">
                    <label>Make</label>
                    <input type="text" name="make" placeholder="make"></input>
                </div>
                <div class="field">
                    <label>Model</label>
                    <input type="text" name="model" placeholder="model"></input>
                </div>
                <div class="field">
                    <label>Year</label>
                    <input type="number" name="year" placeholder="year"></input>
                </div>
                <div class="field">
                    <label>Image</label>
                    <input type="text" name="image" placeholder="image"></input>
                </div>
                <div class="field">
                    <label>Mileage</label>
                    <input type="number" name="mileage" placeholder="Mileage"></input>
                </div>
                <div class="field">
                    <label>Cost per day</label>
                    <input type="text" name="price" placeholder="Cost per day"></input>
                </div>
                <button class="ui button" type="submit">Submit</button>
            </form>
            add car form end
        </div>
    )
}