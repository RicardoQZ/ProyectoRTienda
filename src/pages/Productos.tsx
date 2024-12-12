import { useEffect, useRef, useState } from "react"
import useFetch from "../shared/hooks/useFetch"
import { StoreEndpoints, StoreProductos } from "../shared/declarations/FakeStore"
import Producto from "../shared/components/Producto"
import { Box, FormLabel, Image, Input, Text, useSafeLayoutEffect} from "@chakra-ui/react"
import { database,storage,ID } from "../shared/lib/appwrite"
import { Appwrite } from "../shared/lib/env"
import { toast } from "sonner"

const Productos = () => {
  const [productos,setProductos]=useState<Array<StoreProductos>>()
  const [appwriteProducts, setAppwriteProducts] = useState<Array<object>>()
  const {get} =useFetch(StoreEndpoints.PRODUCTOS)
  const formulario=useRef(null)

  const getProductos=async()=>{
    const productos= await get()

    setProductos(productos)
  }

  const getProductosAppwrite=async()=>{
    const { documents }= await database.listDocuments(Appwrite.databaseId,Appwrite.collections.products)

    setAppwriteProducts(documents)
  }

  const subirFoto=(e)=>{
    e.preventDefault()
    if (formulario.current){
    const form=new FormData(formulario.current)
    const formObject=Object.fromEntries(form.entries())

    console.log(formObject)
    
    const imageID=ID.unique()
    storage.createFile(Appwrite.buckets.pictures,imageID,formObject.image)

    const url:string =storage.getFilePreview(Appwrite.buckets.pictures,imageID)

    const producto={
      nombre_prod:formObject.nombre,
      precio:Number(formObject.precio),
      linkphoto:url,
      descripcion:formObject.descripcion
    }

    database.createDocument(Appwrite.databaseId,Appwrite.collections.products,ID.unique(),producto)
    
    }
  }

  useEffect(()=>{
    getProductos()
    getProductosAppwrite()
  },[])
//<Image src={fotourl}></Image>
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
      <Box as ='form' ref={formulario} w='500px' p='0 auto'>
        <div>
          <FormLabel>Nombre Producto</FormLabel>
          <Input type="text" name="nombre"/>
        </div>
        <div>
          <FormLabel>Precio</FormLabel>
          <Input type="number" name="precio"/>
        </div>
        <div>
          <FormLabel>Imagen</FormLabel>
          <Input type="file" name="image"/>
        </div>
        <div>
          <FormLabel>Descripcion</FormLabel>
          <Input type="text" name="descripcion"/>
        </div>
        <button onClick={subirFoto}>Subir Imagen</button>
      </Box>
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