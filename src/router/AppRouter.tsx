import { Route, Routes} from "react-router-dom"
import Login from "../pages/Login"
import Productos from "../pages/Productos"
import AppOutlet from "./AppOutlet"

const AppRouter = () => {
  return (
    <Routes>
        <Route element={<AppOutlet/>}>
          <Route path='/productos' element={<Productos/>}/>
        </Route>
        <Route path='/' element={<Login/>}/>
        
    </Routes>
  )
}

export default AppRouter