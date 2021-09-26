import './App.css';

import React,{useState, useRef} from 'react'
import Card from './components/Card'
import Filter from './components/filter/Filter'
import Modal from './components/modal/Modal'

const App = () => {
const inputEl=useRef(null)

const [show,setShow]=useState(false)
const [cardToggle,setCardToggle]=useState(true)  

const [boys, setBoys] = useState([
{name: 'khalid',age:31 , address: 'irbid', phone: 123456789 ,},
{name: 'mohammed',age: 50, address: 'amman', phone: 123456789 ,},
{name: 'ibrahem',age: 40, address: 'daraa', phone:123456789 ,},
{name: 'kassem',age: 33, address: 'almafraq', phone: 123456789 ,}])

const [filterN,setfilterN]=useState("")

const deleteHandler = async(idx) =>{
  console.log(boys);
    await setBoys((prevState) =>{
     return prevState.filter((item,ix) => {
       return ix !== idx;
     })
  })
  console.log(boys);
}
const showCards=()=>{
  setCardToggle(!cardToggle)
}
const testHandler=() => {
  console.log(inputEl.current.value);
}
const focuseInput=() => {
  // inputEl.current.focus()
}
const filterNames=(name)=>{
  setfilterN(name)
}
const namesHandlers=()=>{
  if(filterN.length !==0){
    const arrFilter= boys.filter(item => item.name.includes(filterN))
    return arrFilter
  } else return boys
}
const hideModal=() => {
  // setShow(false)
  console.log('modal fire');
}
return (
   <div className={'mainContainer'}>
   <Modal show={show} hideModal={() => setShow(false)}/>
        <h2>Boys</h2>
        <div style={{marginBottom: '20px'}}>
           <button onClick={() => setShow(true)}>Show Modal</button>
        </div>
        <button onClick={showCards}>{cardToggle ? 'show' : 'hide'}</button>
        <div className= {cardToggle ? 'show' : 'hide'}>
        <Filter filterNames={filterNames}/>
        <Card namesList={namesHandlers()} type='men' deleteHandler={deleteHandler}/>
        </div>
   </div>
  )
}

export default App

