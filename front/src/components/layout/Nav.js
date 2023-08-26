import { Link } from "react-router-dom"

const Nav = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Central Alarmas</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse me-auto">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link navitems" to="/productos">Productos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link navitems" to="/contacto">Contacto</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link navitems" to="/nosotros">Nosotros</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Nav