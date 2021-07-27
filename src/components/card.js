import React from 'react'

export default props => {
    return(
        <div className={`card ${props.cardColor} ${props.colorVar}`}>
            <div className={`card-content ${props.textColor}`}>
                <span className="card-title">{props.cardTitle}</span>
                {props.children}
                <div className="card-action">
                    {props.cardAction}
                </div>
            </div>
        </div>
    );
}