import React, { useEffect, useState } from 'react'
import { TextField } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
const initialState = {
  name: '',
  mobile: '',
  email: ''
}

const AddNewData = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(initialState)
  const { name, email, mobile } = state;
const [edit, setEdit] = useState(false)
  const { id, flag } = useParams();

   const handleEdit=()=>{
setEdit(true)
   }
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleSave=async()=>{
    if(name.trim().length===0){
      toast.error('please enter name')
    }else if( mobile.length!==10){
      toast.error('please enter  valid mobile')
    }
    else if(!validateEmail(email)){
      toast.error('please enter right email Syntax')
    }else {
      await axios.post('http://localhost:5000/api/addEmp', { name, email, mobile }).then((response) => {
            console.log(response)
             navigate("/");
              toast.success('saved')
           })
    }
  }

  const handleUpdate = async (id) => {
    await axios.post('http://localhost:5000/api/editEmp', { id,name, email, mobile }).then((response) => {
      console.log(response)
      if(response.data.affectedRows> 0 ){
        toast.success(`updated successfuly ${id}`)
      }else{
        toast.error(`not updated ${id}`)
      }navigate("/");
    })
  }

  const hnadleInputChange = (e) => {
    const { name, value } = e.target
    setState({ ...state, [name]: value })
  }

  const getEmpDetail = async (id) => {
    await axios.post('http://localhost:5000/api/getEmpDetail', { id }).then((response) => {
      console.log(response.data)
      if (response.data.length > 0) {
        const emp = response.data[0];
        setState({
          name: emp.Name,
          mobile: emp.MobileNo,
          email: emp.Email
        })
      } else {
        alert("not found")
      }
    }).catch((err) => {
      console.log(err.message)
    })
  }
  useEffect(() => {
    if (id) {
      getEmpDetail(id);
    }
  }, [id])

  return (
    <div className='card'>
      <h3 style={{ display: 'flex', justifyContent: 'center', paddingTop: '50px' }}>
        {
        flag==="0"?"View Employee Data":flag==="1"?"Edit Employee Data":"Add New Data"
        }
        </h3>
      <TextField style={{ backgroundColor: 'white', width: '300px', display: 'flex', margin: 'auto', marginTop: '20px', marginBottom: '20px' }}
        label="Enter Name"
        variant="outlined"
        type='text'
        name='name'
        value={name}
        disabled={flag==="0"&& edit===false? true : false}
        onChange={hnadleInputChange} />
      <TextField style={{ backgroundColor: 'white', width: '300px', display: 'flex', margin: 'auto', marginTop: '20px', marginBottom: '20px' }}
        label="Enter Mobile"
        variant="outlined"
        type='number'
        name='mobile'
        value={state?.mobile}
        disabled={flag==="0"&& edit===false? true : false}
        onChange={hnadleInputChange} />
      <TextField style={{ backgroundColor: 'white', width: '300px', display: 'flex', margin: 'auto', marginTop: '20px', marginBottom: '20px' }}
        label="Enter Email"
        variant="outlined"
        type="email"
        name='email'
        value={state?.email}
        disabled={flag==="0"&& edit===false? true : false}
        onChange={hnadleInputChange} />
      <div className='btn-add'
        style={{ justifyContent: 'center' }}>
        {
          !id?<button className='add' style={{ width: '300px' }} onClick={()=>handleSave()}>Add New Data</button>:
          flag==="1"?<button className='add' style={{ width: '300px' }} onClick={()=>handleUpdate(id)}>Update</button>:
          flag==="0"?<button className='add' style={{ width: '300px' ,display:`${edit===false?"block":"none"}`}} onClick={handleEdit}>Edit Employee Data</button>:null
        }
        {flag==="0"&& edit===true?<button className='add' style={{ width: '300px' }} onClick={()=>handleUpdate(id)}>Update</button>:null}
      </div>
      <div className='btn-add' style={{ justifyContent: 'center' }}>
        <button className='add' style={{ width: '300px' }} onClick={() => navigate("/")}>
          {
            flag==="0"?"Go Back":"cancel"
          }
        </button>
      </div>
    </div>
  )
}

export default AddNewData