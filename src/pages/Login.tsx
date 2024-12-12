import { useRef } from 'react'
//import './styles/Login.css'
import { DummyEndpoints, DummySession } from '../shared/declarations/DummyJson'
import useFetch from '../shared/hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import { Box, Button, FormLabel, Input } from '@chakra-ui/react'
import logoFormulario from './images/LogoFormulario.jpg';

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
    <Box bgImage={`url(${logoFormulario})`} backgroundSize='cover' backgroundPosition='center' backgroundRepeat='no-repeat' m='0' h='100vh' bgSize='cover' display='flex' justifyContent='center' alignItems='item'>
      <Box as='div' display='flex' justifyContent='center' alignItems='center' h='100%'>
          <Box as='form' ref={datosForm} bg='rgba(255, 255, 255, 0.5)' p='2rem' borderRadius='10px' boxShadow='0 4px 10px rgba(0, 0, 0, 0.2)' w='300px' textAlign='center'>
              <Box as='h2' marginBottom='1.5rem' fontSize='1.5rem' color='#333'>Iniciar Sesión</Box>
              <Box marginBottom='1rem' textAlign='left'>
                  <FormLabel htmlFor="username" display='block' marginBottom='0.5rem' fontSize='0.9rem' color='#000000'>Usuario</FormLabel>
                  <Input type="text" id="username" name="username"/>
              </Box>
              <Box marginBottom='1rem' textAlign='left'>
                  <FormLabel htmlFor="password" display='block' marginBottom='0.5rem' fontSize='0.9rem' color='#000000'>Contraseña</FormLabel>
                  <Input type="password" id="password" name="password"/>
              </Box>
              <Button className="Ingresar" onClick={(e)=>ingresar(e)}>Ingresar</Button>
          </Box>
      </Box>
    </Box>
  )
}

export default Login