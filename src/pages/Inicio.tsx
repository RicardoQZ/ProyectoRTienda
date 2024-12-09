import { Link } from "react-router-dom"

const Inicio = () => {
  return (
    <>
      <div>Inicio</div>
      <Link to={'/productos'}>Ir a Productos</Link>
    </>
  )
}

export default Inicio