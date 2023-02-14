import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import AddNewData from './pages/AddNewData'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Settings from './pages/Settings'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Test from './pages/Test'


const App = () => {
  return (
    <div className='App'>
      {/* <Test/> */}
      <Header>
        <ToastContainer position='top-center'/>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/settings' element={<Settings/>} />
          <Route path='/addnewdata' element={<AddNewData/>}/>
          <Route path='/addnewdata/:id/:flag' element={<AddNewData/>}/>
        </Routes>
      </Header>
      </div>
  )
}

export default App