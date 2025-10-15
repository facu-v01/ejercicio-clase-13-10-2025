import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav style={{ padding: '20px', borderBottom: '1px solid #ccc' }}> 
            <Link to="/" style={{ marginRight: '15px' }}>Inicio</Link> 
            <Link to="/register">Registrarse</Link> 
        </nav> 
    )
}

export default Navbar