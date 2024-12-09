import { Box, Image } from "@chakra-ui/react"
import { StoreProductos } from "../declarations/FakeStore"
import { Link } from "react-router-dom"

const Producto = ({producto}:{producto:StoreProductos}) => {
  return (

    <Box bgColor='#eeee' borderRadius='20px' p='2em' border='2px solid blue' w='200px'><Link to={`/productos/${producto.id}`}>
        <Box as='h3' w='150px'>{producto.title}</Box>
        <Box justifyContent='center' w='100px'>
          <Image src={producto.image} alt="" loading='lazy'/>
        </Box>
        </Link>
    </Box>
  )
}

export default Producto