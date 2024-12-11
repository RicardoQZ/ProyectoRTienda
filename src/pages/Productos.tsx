import { useEffect, useState } from "react"
import useFetch from "../shared/hooks/useFetch"
import { StoreEndpoints, StoreProductos } from "../shared/declarations/FakeStore"
import Producto from "../shared/components/Producto"
import { Box, Image, Text} from "@chakra-ui/react"
import { database } from "../shared/lib/appwrite"
import { Appwrite } from "../shared/lib/env"

const Productos = () => {
  const [productos,setProductos]=useState<Array<StoreProductos>>()
  const [appwriteProducts, setAppwriteProducts] = useState<Array<object>>()

  const {get} =useFetch(StoreEndpoints.PRODUCTOS)

  const getProductos=async()=>{
    const productos= await get()

    setProductos(productos)
  }

  const getProductosAppwrite=async()=>{
    const { documents }= await database.listDocuments(Appwrite.databaseId,Appwrite.collections.products)

    setAppwriteProducts(documents)
  }

  useEffect(()=>{
    getProductos()
    getProductosAppwrite()
  },[])

  return (
    <>
       <Box w='65%' m='0 auto'>
        <h3>Mis Productos</h3>
        <hr />
        {
            appwriteProducts?.map(product => (
                <Box key={product.nombre_prod}>
                    <Image src={product.linkphoto} w='100px'></Image>
                    <Text>{product.nombre_prod}</Text>
                    <Text>{product.precio}</Text>
                    <Text>{product.descripcion}</Text>
                </Box>
            ))
        }
      </Box>
      <br />
      <br />
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