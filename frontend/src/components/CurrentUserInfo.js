import React from 'react';

export default function CurrentUserInfo(){
    
    return(
        <div class="ui horizontal list">
            <div class="item">
                <div class="content">
                    <div class="ui sub header">
                        <i class="user icon"></i> {localStorage.username}
                    </div>
                        Points {localStorage.point}
                </div>
            </div>
        </div>
    )
}