import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { Link,useNavigate } from 'react-router-dom'

export default function Edit() {

    const myNavigation=useNavigate();

  //<------ Getting data from local storage------>


useEffect(()=>{
    setsamId(localStorage.getItem('myid'));
    setsamFname(localStorage.getItem('myfname'));
    setsamLname(localStorage.getItem('mylname'));
    setsamNum(localStorage.getItem('mynumber'));
    setsamDob(localStorage.getItem('mydob'));
    setsamDept(localStorage.getItem('mydept'));

},[])

//<------storing the data that Getting  from local storage------>

const [samId, setsamId] = useState (0);
const [samFname, setsamFname] = useState ('');
const [samLname, setsamLname] = useState ('');
const [samNum, setsamNum] = useState ('');
const [samDob, setsamDob] = useState ('');
const [samDept, setsamDept] = useState ('');


//<------sending Edited data back to api------>
 function storeEditedData(e){
    e.preventDefault();
    axios.put(`https://63ea415e811db3d7ef0a6c6d.mockapi.io/crud/${samId}`,{
        f_name:samFname,
        l_name:samLname,
        my_num:samNum,
        my_dob:samDob,
        my_dept:samDept
    }).then(()=>{
        myNavigation('/')
    }).catch((erro)=>{
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
<button className='btn btn-info mt-5 ml-5' >Back</button>

</Link>
<h1> EDIT STUDENT RECORD</h1>

</div>	

<form className="needs-validation" onSubmit={storeEditedData}    novalidate>
<div className="form-row">

    <div className="col-md-8 offset-2 mb-3">
        <input type="text" className="form-control " id="validationCustom01" placeholder="First Name" value={samFname}  onChange={(e)=>setsamFname(e.target.value)}  />
        <div className="valid-feedback">Looks good</div>
    </div>
   <div className="col-md-8 offset-2 mb-3">
        <input type="text" className="form-control" id="validationCustom01" placeholder="Last Name" value={samLname}  onChange={(e)=>setsamLname(e.target.value)}  />
        <div className="valid-feedback">Looks good</div>
    </div>

    <div className="col-md-8 offset-2 mb-3">
        <input type="text" className="form-control" id="validationCustom01" placeholder="Mobile Number" value={samNum}  onChange={(e)=>setsamNum(e.target.value)}   />
        <div className="valid-feedback">Enter At least 10 Digit Number</div>
    </div>

     <div className="col-md-8 offset-2 mb-3">
        <input type="date" className="form-control" id="validationCustom01" value={samDob}  onChange={(e)=>setsamDob(e.target.value)}   />
        <div className="valid-feedback">Looks good</div>
    </div>
     <div className="col-md-8 offset-2 mb-3">
        <input type="text" className="form-control " id="validationCustom01" placeholder="Department" value={samDept}  onChange={(e)=>setsamDept(e.target.value)}   />
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
