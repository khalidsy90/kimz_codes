import React,{useState} from 'react'
import Form from '../layout/Form';


const preventRefresh=(event)=>{
    event.preventDefault();
}

const Adduser = () => {
    const [input,setInput]=useState({
        name:'',
        age:'',
        address:'',
        phone:''
    })
    const inputHandler=(event)=> {
        console.log(event.target.value);
    }
    return (
        <Form onSubmit={preventRefresh}>
            <Form.Controller>
                <label htmlFor='name'>name : </label>
                <input type='text' id='name' placeholder='enter your name' value={input.name} onChange={inputHandler}></input>
            </Form.Controller> 
            <Form.Controller>
                <label htmlFor='age'>age : </label>
                <input type='text' id='age' placeholder='enter your age' value={input.age} onChange={inputHandler}></input>
            </Form.Controller> 
            <Form.Controller>
                <label htmlFor='address'>address : </label>
                <input type='text' id='address' placeholder='enter your address' value={input.address} onChange={inputHandler}></input>
            </Form.Controller> 
            <Form.Controller>
                <label htmlFor='phone'>phone : </label>
                <input type='text' id='phone' placeholder='enter your phone' value={input.phone} onChange={inputHandler}></input>
            </Form.Controller>
            <div style={{marginTop: '30px'}}>
                <Form.Btn type='submit' style={{marginRight: '20px'}}>save</Form.Btn>
                <Form.Btn type='reset'>reset</Form.Btn>
            </div>
        </Form>
    )
}

export default Adduser
