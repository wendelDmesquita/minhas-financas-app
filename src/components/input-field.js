import React from 'react'

export default props => {
    return(
        <div className={`input-field col s${props.colS}`}>
            <label htmlFor={props.labelFor}>{props.label}</label>
            {props.children}
        </div>
    );
}