import React from 'react'

export default (props) => {
    return(
        <div className="card">
            <div className="card-content">
                <span className="card-title">{props.cardTitle}</span>
                {props.children}
                <div className="card-action">
                    {props.cardAction}
                </div>
            </div>
        </div>
    );
}