import { Box, Image } from "@chakra-ui/react"
import { StoreProductos } from "../declarations/FakeStore"

const Producto = ({producto}:{producto:StoreProductos}) => {
  return (

    <Box bgColor='#eeee' borderRadius='20px' p='2em' border='2px solid blue' w='200px'>
        <Box as='h3' w='150px'>{producto.title}</Box>
        <Box justifyContent='center' w='100px'>
          <Image src={producto.image} alt="" loading='lazy'/>
        </Box>
    </Box>
  )
}

export default Producto