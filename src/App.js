import './App.css';

import React,{useState, Fragment} from 'react'
import Card from './components/Card'
import Filter from './components/filter/Filter'
import Modal from './components/modal/Modal'
import Button from './components/layout/Button';
import Adduser from './components/Adduser/Adduser';
const App = () => {

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
const filterNames=(name)=>{
  setfilterN(name)
}
const namesHandlers=()=>{
  if(filterN.length !==0){
    const arrFilter= boys.filter(item => item.name.includes(filterN))
    return arrFilter
  } else return boys
}

return (
  <Fragment>

   <div className={'mainContainer'}>
        <h2>Boys</h2>
        <Button 
        style={{marginBottom: '20px'}}
        onClick={() => setShow(true)}
        >
        Show Modal
        </Button>
        <Button onClick={showCards}>
        {cardToggle ? 'show' : 'hide'}
        </Button>
        <div className= {cardToggle ? 'show' : 'hide'}>
        <Filter filterNames={filterNames}/>
        <Card namesList={namesHandlers()} type='men' deleteHandler={deleteHandler}/>
        </div>
   </div>
        <Modal show={show} hideModal={() => setShow(false)}>
          <Adduser/>
        </Modal>
  </Fragment>
  )
}

export default App

