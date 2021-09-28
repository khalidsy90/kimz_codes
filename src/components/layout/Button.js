import React from 'react'
import styles from './Form.module.css'

const Button = (props) => {
    return (
        <button
        type={`${props.type ? props.type : 'button'}`}
        onClick={props.onClick}
        style={props.style}
        className={styles.button}
        >
        {props.children}
        </button>
    )
}

export default Button
