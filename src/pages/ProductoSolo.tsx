import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { StoreEndpoints, StoreProductos } from "../shared/declarations/FakeStore"
import useFetch from "../shared/hooks/useFetch"
import { Box, Image } from "@chakra-ui/react"

const ProductoSolo = () => {
    const {ropaId}=useParams()

    const [producto,setProducto]=useState<StoreProductos>()
  
    const {get} =useFetch(`${StoreEndpoints.PRODUCTOS}/${ropaId}`)
  
    const getProductos=async()=>{
      const producto= await get()
  
      setProducto(producto)
    }
  
    useEffect(()=>{
      getProductos()
    },[])
  return (
    <div>
        {
            producto &&
            <>
                <Box justifyContent='center' w='300px'>
                    <Image src={producto.image} alt="" loading='lazy'/>
                </Box>
                <h3>{producto && producto.title}</h3>
                <Link to='/productos'>Volver a Productos</Link>
            </>
        }
        
    </div>
  )
}

export default ProductoSolo