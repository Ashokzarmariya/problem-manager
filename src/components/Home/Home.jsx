import React, { useContext } from 'react'
import AuthContext from '../../contex/AuthContext'
import AddProblems from '../AddProblems/AddProblems'
import Hard from '../Problems/Hard'
import Registration from '../Registration/Both'



const Home = () => {
  const user = useContext(AuthContext)
  
  return (
    <div>
      {user && <AddProblems />}
      
     {!user && <Registration/>}
    </div>
  )
}

export default Home
