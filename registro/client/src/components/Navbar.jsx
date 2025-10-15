import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav style={{ padding: '20px', borderBottom: '1px solid #ccc' }}> 
            <Link to="/" style={{ marginRight: '15px' }}>Inicio</Link> 
            <Link to="/register" style={{ marginRight: '15px' }}>Registrarse</Link>
            <Link to="/user">Usuario</Link>
        </nav> 
    )
}

export default Navbar