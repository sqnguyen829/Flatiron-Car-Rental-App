import React from 'react';

export default function CarCard(){
    return(
        <div>
            <div class="ui link cards">
                <div class="card">
                    <div class="image">
                        <img src="/images/avatar2/large/matthew.png"></img>
                    </div>
                    <div class="content">
                        <ul>Car make/model</ul>
                        <ul>Car Cost</ul>
                    </div>
                    <div class="extra content">
                        <span class="right floated">
                            Year
                        </span>
                        <span>
                            <i class="star icon"></i>
                                Avg Rating
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}