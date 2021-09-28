import React from 'react'
import styles from './Form.module.css'
import Btn from './Button'

const Form = (props) => {
    return <form onSubmit={props.onSubmit}>{props.children}</form>
}


const Controller = (props) => {
    return <div className={styles.control}>{props.children}</div>
}

Form.Controller=Controller
Form.Btn=Btn

console.dir(Form);

export default Form
