import "./Navbar.css"
import Carwidget from './Carwidget'
import {NavLink, Link} from 'react-router-dom'

const Navbar = (props) =>{
    return (
        
           <header>
      <nav className="navbar navbar-expand-lg bg-white border border-dark-subtle">
        <div className="container-fluid">
           
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <Link to='/'> 
                <img src="/imagenes/logo_narita.JPG"   alt="Logo Narita" className="logonarita-class"/>
                </Link>

                
                <div className="categorias">
                <NavLink to ={`/category/Beachwear`} className={({ isActive})=> isActive ? 'ActiveOption navbarra' : 'Option navbarra'}>Beachwear</NavLink>
                <NavLink to ={ `/category/Día`} className={({ isActive})=> isActive ? 'ActiveOption navbarra' : 'Option navbarra'}>Día</NavLink>
                <NavLink to ={ `/category/Noche`} className={({ isActive})=> isActive ? 'ActiveOption navbarra' : 'Option navbarra'}>Noche</NavLink>
                </div>
            </div>
        </div>
        <Carwidget/>
      </nav>
        
    </header>
    
    );
};

export default Navbar;

//despues de a

//<a className="navbar-brand " href=""> <img src="/imagenes/logo_narita.JPG"   alt="Logo Narita" className="logonarita-class"/></a>

//<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//<span className="navbar-toggler-icon"></span>
//</button>

