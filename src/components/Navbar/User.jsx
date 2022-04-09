import { Button } from '@mui/material'
import React, { useContext } from 'react'
import AuthContext from '../../contex/AuthContext'

const User = () => {
    const user=useContext(AuthContext)
  return (
      <div>
          {/* <Button variant={contained}>User</Button> */}
          <Button variant="contained" onClick={
              () => {
                  console.log("user",user)
              }
          }>Contained</Button>
      
    </div>
  )
}

export default User
