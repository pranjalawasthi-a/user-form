import React, { useState } from 'react';
import './AddUser.css';
const AddUser = (props) =>{
    const [title,setTitle]=useState("");
    const [age,setAge]=useState("");

    const nameHandler=(event)=>{
        setTitle(event.target.value);
    }

    const ageHandler=(event)=>{
        setAge(event.target.value);
    }

    const formSubmit=(event)=>{
        event.preventDefault();
        const details={
            name:title,
            age:age
        }
        props.onAddUser(title,age);
       // console.log(details);
        setTitle("");
        setAge("");
    }
    return (
        <div className= "form-box-main">
             <form onSubmit={formSubmit}>
                <div className= 'form-box'>
                    <label>Form for adding user details</label>
                    <div className='input'>
                        <label>Enter your name</label>
                        <input
                         id="username"
                        type="text"
                        value={title}
                        onChange={nameHandler}
                        ></input>
                    </div>
                    <div className='input'>
                        <label>Enter your age</label>
                        <input
                         id="age"
                        type="text"
                        value={age}
                        onChange={ageHandler}
                        ></input>
                        
                    </div>
                    <div>
                    <button className='submit' >Submit</button>
                    </div>
                </div>
    </form>
        </div>
   
    )
    
}
export default AddUser;