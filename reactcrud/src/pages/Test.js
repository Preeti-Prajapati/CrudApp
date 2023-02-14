// import React from 'react'
// import { AppBar, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
// import MenuIcon from '@mui/icons-material/Menu';
// import { AccountCircle, Home as HomeIcon, Settings as Gear, Dashboard as DashIcon } from '@mui/icons-material'
// import { Route, Routes, useNavigate } from 'react-router-dom'
// import Home from './pages/Home';
// import Dashboard from './pages/Dashboard';
// import Settings from './pages/Settings';

// const drawerItems = [
//   {
//     name: "Home",
//     path: "/",
//     icon: <HomeIcon />,
//     component: <Home />
//   },
//   {
//     name: "Dashboard",
//     path: "/dashboard",
//     icon: <DashIcon />,
//     component: <Dashboard />
//   },
//   {
//     name: "Setting",
//     path: "/setting",
//     icon: <Gear />,
//     component: <Settings />
//   },

// ]

// const App = () => {
//   const navigate=useNavigate();
//   return (
//     <div style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
//       <AppBar>
//         <Toolbar>
//           <IconButton color="inherit">
//             <MenuIcon />
//           </IconButton>
//           <Typography noWrap variant='h6' component={"div"} >
//             App Header
//           </Typography>
//           <div style={{ flexGrow: 1 }}></div>
//           <IconButton color="inherit">
//             <AccountCircle />
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//       <Toolbar style={{ padding: 0 }} />

//       <div style={{ width: '250px', backgroundColor: '#fff' }}>
//         <Toolbar style={{ padding: 0 }} />
//         <List>
//           {drawerItems.map((menuItem, index) => (
//             <ListItem key={menuItem.name} disablePadding onClick={()=>navigate(menuItem.path)}>
//               <ListItemButton>
//                 <ListItemIcon>
//                   {
//                     menuItem.icon
//                   }
//                 </ListItemIcon>
//                 <ListItemText primary={menuItem.name} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </div>
//       <div style={{ flex: 4, backgroundColor: '#f6f6f6' }}>
//       <Toolbar style={{ padding: 0 }} />
//         <Routes>
//           {drawerItems.map((menuItem, index) => (
//             <Route key={menuItem.path} path={menuItem.path} element={menuItem.component}/>
//            ))}
//         </Routes>
//       </div>
//     </div>
//   )
// }

// export default App
import React, { useState } from 'react'

const Test = () => {
  const [off, setOff] = useState(false)
  const [on, setOn] = useState(false)
const handleOff=()=>{
  setOff(true)
  setOn(false)
}
const handleOn=()=>{
  setOn(true)
  setOff(false)
}
  return (
    <div style={{display:'flex', flex:1,justifyContent:'center',alignItems:'center'}}>
      <button onClick={handleOff}>OFF</button>
      <div style={{ borderRadius:'50%',width:'50px',height:'50px',backgroundColor:`${off===true && on===false?'black':'yellow'}`}}></div>
      <button onClick={handleOn}>ON</button>
    </div>
  )
}

export default Test