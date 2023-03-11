// vary imp Note:-in "create" we dont  have "id" input field as this id  is of "ARRAY OF AN OBJECT"  


import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';

export default function Read() {
  const [data, setdata] = useState([])

function getData(){
  axios.get('https://63ea415e811db3d7ef0a6c6d.mockapi.io/crud').then(response=> setdata(response.data)).catch((erro)=>{
    console.log(erro)
})

}

useEffect(()=>{
getData();
},[]);


//<----------------------delete handling--------------------------------
function handleDelete(id){
  axios.delete(`https://63ea415e811db3d7ef0a6c6d.mockapi.io/crud/${id}`).then(()=>{
  getData();

  })

}


    // storing  data in local storage

function handleEdit(id,fname,lname,num,dob,dept){
localStorage.setItem('myid',id);
localStorage.setItem('myfname',fname);
localStorage.setItem('mylname',lname);
localStorage.setItem('mynumber',num);
localStorage.setItem('mydob',dob);
localStorage.setItem('mydept',dept);

}

  return (
    <>
      <div className="heading">
		    <h1>Students  Attendance Management System</h1>
	    </div>
      <div className="main">
         <Link to={'/Create'}>
             <button className='btn btn-info mt-5 ml-5' >ADD STUDENT+</button>
        </Link>
	     <h1> STUDENT  RECORD</h1>
     </div>
     <div className='container'>
        <div className='butt'></div>
        <table className='table table-bordered table-striped table-dark  table-hover ' >
        <thead >
            <tr>
                <th>ID</th>  
                <th>Fname</th>
                <th>Lname</th>
                <th>Number</th>
                <th>D.O.B</th>
                <th>Department</th>
                <th>EDIT</th>
                <th>DELETE</th>
            </tr>
        </thead>
        <tbody>
        {
  data.map((currData)=>{
    return(
      <tr>
         <td>{currData.id}</td>
         <td>{currData.f_name}</td>
         <td>{currData.l_name}</td>
         <td>{currData.my_num}</td>
         <td>{currData.my_dob}</td>
         <td>{currData.my_dept}</td>
         <td>
            <Link to={'/Edit'}>
              <button className='btn  m-0 btn-primary' onClick={()=>handleEdit(currData.id,currData.f_name,currData.l_name,currData.my_num,currData.my_dob,currData.my_dept)} > EDIT</button>
            </Link>
         </td>
         <td> 
           <button className='btn m-0 btn-danger'  onClick={()=>{if(window.confirm("are you sure")){handleDelete(currData.id)}}}> DELETE</button> 
         </td>
         </tr> 

    )

  })
}
                 
        </tbody>
      </table>
      
      </div>
    </>
  )
}
