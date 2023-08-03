import Carwidget from './Carwidget'
const Navbar = (props) =>{
    return (
        <>
           <header>
      <nav className="navbar navbar-expand-lg bg-white border border-dark-subtle">
        <div className="container-fluid">
            <a className="navbar-brand " href=""> <img src="/imagenes/logo_narita.JPG"   alt="Logo Narita" className="logonarita-class"/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link" aria-current="page" href="">Inicio</a></li>
                
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" >Ver Todos</a></li>
                            <li><a className="dropdown-item" >Beachwear</a></li>
                            <li><a className="dropdown-item" >Día</a></li>
                            <li><a className="dropdown-item" >Noche</a></li>
                        </ul>
                    </li>
              
                    <li className="nav-item"><a className="nav-link" href="">Contacto</a></li>
                     
                </ul>
            </div>
        </div>
        <Carwidget/>
      </nav>
        

    </header>;
        </>
    );
};

export default Navbar;