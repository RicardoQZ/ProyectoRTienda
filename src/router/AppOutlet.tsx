import { Navigate, Outlet } from "react-router-dom"
import NavBar from "../shared/components/NavBar"

const AppOutlet = () => {
  const token=localStorage.getItem('token')

  return(
    
    token?<><NavBar/><Outlet/></>:<Navigate to='/'/>
  )
}

export default AppOutlet