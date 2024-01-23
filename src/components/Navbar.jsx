import { Box, Button } from '@mui/material'
import React, { useContext } from 'react'
import AppContext from '../context/ContextApi'
import { useNavigation } from 'react-router-dom'
import { getData } from '../callApi/backend_api'

const Navbar = () => {
  const { user, setUser } = useContext(AppContext)
  const handleLogout = () => {
    getData('/auth/logout').then(res => {
      setUser({
        isLoggedIn: false,
        username: ''
      })
    })
  }
  return (
    <Box marginLeft={'30px'} display={'flex'} justifyContent={'space-between'}>
      <img src='/assets/logo.png' />

      {user.isLoggedIn ? <div class="dropdown" style={{marginTop:'15px',marginRight:'20px'}}>
        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
          {user.username}
        </button>
        <div class="dropdown-menu">
          <a class="dropdown-item" style={{cursor:'pointer'}}>Saved Job</a>
          <a class="dropdown-item" onClick={handleLogout} style={{cursor:'pointer'}}>Logout</a>
        </div>
      </div> : null}

    </Box>
  )
}

export default Navbar