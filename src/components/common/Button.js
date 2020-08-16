import React from 'react'

export const Button = (props) => {
    return (
        <div value={props.value} id={props.id} className={"button"+" "+props.class1+" " +props.class2} onClick={props.callBack }
        style={props.style}
        onMouseOver={props.onMouseOver}
        >
            {props.children}
        </div>
    )
}
