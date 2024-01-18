import React, { useState } from 'react'
import "./App.css"
// import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer, toast } from 'react-toastify';
export default function Form() {
    const[formsubbmit,setFormsubbmit]=useState(false)
    const[formerr,setError]=useState({})
    const[formdata,setFormdata]=useState({
        firstName:" ",
        lastName:" ",
        email:" ",
        phone:" ",
    })
    // const notify = () => toast("Your Form Subbmitted");
 

     
const handleInput=e=>{
    let{name,value}=e.target
    setFormdata({
        ...formdata,[name]:value
    })

}
const Submit=(e)=>{
e.preventDefault()
console.log(formdata)
let errors=vaildDate(formdata)

setError(errors)

let errKey=Object.keys(errors)
if(errKey.length==0){
    setFormsubbmit(true)
}
else{
    setFormsubbmit(false)
}
}
const vaildDate=(data)=>{
let error={}
if (data.firstName.trim()==""){
    error.firstName="please enter the first name"
}
if (data.lastName.trim()==""){
    error.lastName="please enter the last name"
}
if (data.phone.trim().length!=10){
    error.phone="please enter the phone number"
}
if (data.phone.trim()==""){
    error.phone="please enter the phone number"
}
if (data.email.trim()==""){
    error.email="please enter the email data"
}
console.log(error)
return error
}
  return (
    <div className='form-container'>

      <fieldset>
        <legend>Fill this form</legend>
        <form onSubmit={Submit}>
{formsubbmit && ( <div className='success'>
            <p>Registation Successful</p>
          </div>) }
         

          <label style={{color:"black"}}>First Name : </label>
          <input 
            type="text"
            name='firstName'
            onChange={handleInput} 
          />
          {formerr.firstName &&   <p className='err'>Enter your FirstName </p>}
        
          <label style={{color:"black"}}>Last Name : </label>
          <input type="text" 
            name='lastName'
            onChange={handleInput} 
          
          
          
          />
   {formerr.lastName &&   <p className='err'>Enter your LastName </p>}
          <label style={{color:"black"}}>Email : </label>
          <input type="email"
            name='email'
            onChange={handleInput} 

          />
   {formerr.email &&   <p className='err'>Enter your Email </p>}
          <label style={{color:"black"}}>Phone : </label>
          <input type="number" 
            name='phone'
            onChange={handleInput} 

          />
   {formerr.phone &&   <p className='err'>Enter your Phone </p>}
          <input type="submit"  value={"Register"}/>


        </form>
      </fieldset>

    </div>
    )
}
