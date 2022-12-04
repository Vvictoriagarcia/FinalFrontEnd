import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav className='nav'>
      <Link to="/"><li>Home</li></Link>
      <Link to="/contact"><li>Contact</li></Link>
      <Link to="/favs"><li>Favs</li></Link>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar