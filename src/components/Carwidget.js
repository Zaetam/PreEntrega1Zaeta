import './carwidget.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

const Carwidget = () =>{

    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to='/cart'>
                  
            <img className="carritoclass" src="/imagenes/carrito.jpg" />
            <span style={{display: totalQuantity> 0 ? 'block' : 'none'}}>{totalQuantity}</span>
        
        </Link>
    );
};

export default Carwidget;