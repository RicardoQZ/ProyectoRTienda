import { useEffect, useState } from "react"
import useFetch from "../shared/hooks/useFetch"
import { StoreEndpoints, StoreProductos } from "../shared/declarations/FakeStore"
import Producto from "../shared/components/Producto"
import { Box} from "@chakra-ui/react"

const Productos = () => {
  const [productos,setProductos]=useState<Array<StoreProductos>>()
  
  const {get} =useFetch(StoreEndpoints.PRODUCTOS)

  const getProductos=async()=>{
    const productos= await get()

    setProductos(productos)
  }

  useEffect(()=>{
    getProductos()
  },[])

  return (
    <>
      <Box display='flex' flexWrap='wrap' w='65%' m='0 auto' justifyContent='space-between' gap='1em'>
        {
          productos && productos.map(p=>(
            <Producto key={p.id} producto={p}/>
          ))
        }
      </Box>
    </>
  )
}

export default Productos