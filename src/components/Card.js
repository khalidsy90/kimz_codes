import React from 'react'
import styles from './card.module.css'

const Card = ({namesList , type, deleteHandler}) => {
    const cards=namesList.map(({name,age,address,phone},idx) => 
    <div className={styles.cardWrapper} key={idx} style={{backgroundColor: type === 'men' ? 'blue' : 'pink'}}>
    <div>Name : {name}</div>
    <div>Age : {age}</div>
    <div>Address :{address}</div>
    <div>Phone :{phone}</div>
    <button onClick={() => deleteHandler(idx)}>Delete</button>
  </div>
)  
    return (
        <div>{cards}</div>
    )
}

export default Card