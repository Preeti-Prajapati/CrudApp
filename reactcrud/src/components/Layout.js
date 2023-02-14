import React from 'react'
import { AppBar, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { AccountCircle ,Dashboard,Home,Settings} from '@mui/icons-material'
const drawerItems = [
    {
      name: "Home",
      path: "/",
      icon: <Home />
    },
    {
        name: "Dashboard",
        path: "/dashboard",
        icon: <Dashboard />
      },
    {
      name: "Setting",
      path: "/setting",
      icon: <Settings />
    },
   

  ]
const Layout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
      <AppBar>
        <Toolbar>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography noWrap variant='h6' component={"div"} >
            App Header
          </Typography>
          <div style={{ flexGrow: 1 }}></div>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar style={{ padding: 0 }} />

      <div style={{ width: '250px', backgroundColor: '#fff' }}>
        <Toolbar style={{ padding: 0 }} />
        <List>
          {drawerItems.map((menuItem, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>{menuItem.icon}</ListItemIcon>
                <ListItemText primary={menuItem.name} /> </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
      <div style={{ flex: 4, backgroundColor: '#f6f6f6' }}>

      </div>
    </div>
  )
}

export default Layout