
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Dashboard = () => {
  const [data, setData] = useState([])
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const getEmployeeData = async () => {
    await axios.get('http://localhost:5000/api/getImp').then((response) => {
      console.log(response.data);
      setData(response.data)
    }).catch((err) => {
      setErrorMessage(err.message)
    })
  }
  useEffect(() => {
    getEmployeeData();
  }, [])
  const handleDelete = async (id) => {
    await axios.post('http://localhost:5000/api/deleteImp', { id }).then((response) => {
      console.log(response.data);
      window.confirm(`are you sure to delete data of id ${id}`)
      if (response.data.affectedRows > 0 && window.confirm) {
        getEmployeeData()
        toast.success('deleted successfuly')
      } else {
        alert("Not deleted")
      }
    })
  }

  return (
    <div>
      <div className='btn-add'>
        <button className='add' onClick={() => navigate("/addnewdata")}>Add New Data</button>
      </div>
      <div style={{ color: "red" }}>{errorMessage}</div>
      <div className='table'>
        <div className='row rowheader'>
          <div className='column'>Id</div>
          <div className='column'>Name</div>
          <div className='column'>Mobile</div>
          <div className='column'>Email</div>
          <div className='column'>Action</div>
        </div>

        {data.length === 0 && <div>NO record found</div>}
        {data.map((item, index) => {
          return (
            <div className='row' key={item.Id.toString()}>
              <div className='column'>{item.Id}</div>
              <div className='column'>{item.Name}</div>
              <div className='column'>{item.MobileNo}</div>
              <div className='column'>{item.Email}</div>
              <div className='column'>
                <button className='btn-edit' onClick={() => navigate(`/addnewdata/${item.Id}/1`)}>Edit</button>
                <button className='btn-delete' onClick={() => handleDelete(item.Id)}>Delete</button>
                <button className='btn-view' onClick={() => navigate(`/addnewdata/${item.Id}/0`)}>View</button>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default Dashboard
