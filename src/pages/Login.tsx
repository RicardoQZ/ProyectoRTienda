import { useRef } from 'react'
//import './styles/Login.css'
import { DummyEndpoints, DummySession } from '../shared/declarations/DummyJson'
import useFetch from '../shared/hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

const Login = () => {
  const datosForm =useRef(null)
  const navigate=useNavigate()
  const {post}=useFetch(DummyEndpoints.LOGIN)
  const ingresar= async(e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    e.preventDefault()

    const formulario=datosForm.current

    if (formulario){
      const form=new FormData(formulario)
      const formObject=Object.fromEntries(form.entries())
      const json:DummySession=await post(formObject)
      localStorage.setItem('token',json.accessToken)
      navigate('/productos')
    }
  }
  return (
      <Box as='div' className='Contenedor'>
        <form className="formulario" ref={datosForm}>
            <h2>Iniciar Sesión</h2>
            <div className="Group">
                <label htmlFor="username">Usuario</label>
                <input type="text" id="username" name="username"/>
            </div>
            <div className="Group">
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" name="password"/>
            </div>
            <button className="Ingresar" onClick={(e)=>ingresar(e)}>Ingresar</button>
        </form>
    </Box>
  )
}

export default Login