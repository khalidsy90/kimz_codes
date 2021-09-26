import React,{useState} from 'react'
import styles from './filter.module.css'

const Filter = ({filterNames}) => {
    const [filter,setFilter]=useState('')
    const filterHandler=(e) =>{
        let names=e.target.value
        setFilter(names)
        filterNames(names)
    }
    return (
        <div className={styles.mt}>
         <input type='text' placeholder='search by name' value={filter} onChange={filterHandler}/>
        </div>
    )
}

export default Filter
