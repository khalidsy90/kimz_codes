import React from 'react'

const Controller = (props) => {
    console.log('log ',props.children);
    return (
        <div>
           {props.children}
        </div>
    )
}

export default Controller
