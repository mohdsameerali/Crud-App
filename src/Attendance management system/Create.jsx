// vary imp Note:-in "create" we dont  have "id" input field as this id  is of "ARRAY OF AN OBJECT"  

import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';

export default function Create() {

const myNavigation=useNavigate();

const[fname,setfname]=useState("");
const[lname,setlname]=useState("");
const[number,setnumber]=useState("");
const[dob,setdob]=useState("");
const[department,setdepartment]=useState("");
const myapi="https://63ea415e811db3d7ef0a6c6d.mockapi.io/crud";

function mysubmit(e){
    e.preventDefault();
    axios.post(myapi,{
        f_name:fname,
        l_name:lname,
        my_num:number,
        my_dob:dob,
        my_dept:department
    
}).then(()=> myNavigation('/')).catch((erro)=>{
    console.log(erro)
})

}

  return (
    <>
    	<div className="heading">
		<h1>Students  Attendance Management System</h1>
	</div>
<div className="container">
<div className="main">
<Link to={'/'}>
  <button className='btn btn-info mt-5 ml-5' >VIEW STUDENT</button>

  </Link>
	<h1> ADD NEW STUDENT</h1>

</div>	

<form className="needs-validation" onSubmit={mysubmit}   novalidate>
    <div className="form-row">
   
        <div className="col-md-8 offset-2 mb-3">
            <input type="text" className="form-control " id="validationCustom01" placeholder="First Name" value={fname}  onChange={(e)=>setfname(e.target.value)}  />
            <div className="valid-feedback">Looks good</div>
        </div>
       <div className="col-md-8 offset-2 mb-3">
            <input type="text" className="form-control" id="validationCustom01" placeholder="Last Name" value={lname}  onChange={(e)=>setlname(e.target.value)}  />
            <div className="valid-feedback">Looks good</div>
        </div>

        <div className="col-md-8 offset-2 mb-3">
            <input type="text" className="form-control" id="validationCustom01" placeholder="Mobile Number" value={number}  onChange={(e)=>setnumber(e.target.value)}   />
            <div className="valid-feedback">Enter At least 10 Digit Number</div>
        </div>

         <div className="col-md-8 offset-2 mb-3">
            <input type="date" className="form-control" id="validationCustom01" value={dob}  onChange={(e)=>setdob(e.target.value)}   />
            <div className="valid-feedback">Looks good</div>
        </div>
         <div className="col-md-8 offset-2 mb-3">
            <input type="text" className="form-control " id="validationCustom01" placeholder="Department" value={department}  onChange={(e)=>setdepartment(e.target.value)}   />
            <div className="valid-feedback">Looks good</div>
        </div>
            
    </div>
    <div className="butt">
    <button className="btn btn-primary "   type="submit">Submit form</button>
    </div>
</form>
</div>
    </>
  )
}
