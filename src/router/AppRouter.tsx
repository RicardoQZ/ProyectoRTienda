import { Route, Routes} from "react-router-dom"
import Login from "../pages/Login"
import Productos from "../pages/Productos"
import AppOutlet from "./AppOutlet"
import ProductoSolo from "../pages/ProductoSolo"

const AppRouter = () => {
  return (
    <Routes>
        <Route element={<AppOutlet/>}>
          <Route path='/productos' element={<Productos/>}/>
          <Route path='/productos/:ropaId' element={<ProductoSolo/>}/>
        </Route>
        <Route path='/' element={<Login/>}/>
        
    </Routes>
  )
}

export default AppRouter