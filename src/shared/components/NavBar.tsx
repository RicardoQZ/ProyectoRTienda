import { HStack, Link, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react"
import { IoHome } from "react-icons/io5";
import { FaPerson } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import { TiShoppingCart } from "react-icons/ti";

const Navlink=({icon,text}:{icon,text:string})=>{
    return(
        <Link display='flex' gap='0.5em' alignItems='center'>{icon}{text}</Link>
    )
}

const Items =({text}:{text:string})=>{
    return(
    <MenuItem sx={{'&:hover':{backgroundColor:'#e58235'}}}>{text}</MenuItem>
    )
}

const MenuItems=()=>{
    return(
        <Menu>
            <MenuButton>
                <Navlink icon={<MdAccountCircle />} text='Cuenta'/>
            </MenuButton>
            <MenuList>
                <Items text='Ver Perfil' />
                <Items text='Vaciar Carrito' />
                <Items text='Cerrar Sesión' />
            </MenuList>
        </Menu>
    )
}
const NavBar = () => {
  return (
    <HStack h='80px' bgColor='coral' marginBottom='20px'>
        <HStack w='70%' m='0 auto' justifyContent='space-between'>
            <HStack>
                <Text fontSize='2xl'>Mi Tienda</Text>
            </HStack>

            <HStack gap='1.5em'>
                <Navlink icon={<IoHome/>} text='Inicio'/>
                <Navlink icon={<FaPerson/>} text='Nosotros'/>
                <MenuItems/>
                <Navlink icon={<TiShoppingCart />} text=''/>
            </HStack>
        </HStack>
    </HStack>
  )
}

export default NavBar