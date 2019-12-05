import React from 'react';

export default function CurrentUserInfo(){
    
    return(
        <div className="ui horizontal list">
            <div className="item">
                <div className="content">
                    <div className="ui sub header">
                        <i className="user icon"></i> {localStorage.username}
                    </div>
                        Points {localStorage.point}
                </div>
            </div>
        </div>
    )
}