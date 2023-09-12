import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"
import "./Cart.css"


const Cart= () => {
    const { cart, clearCart, totalQuantity, total} = useContext( CartContext);

    if(totalQuantity ===0) {
        return (
            <div>
                <h1> No hay items en el carrito</h1>
                <Link to='/'> Productos</Link>
            </div>
        )
    }
    else{

        return(
        <div>
            {cart.map (p => <CartItem key={p.id}{...p}/>)}
            <h3> Total:${total}</h3>

            <div>
            <button className="btn btn-primary " onClick={() =>clearCart()} style={{width:'45%'}}>Vaciar Carrito</button>
            <Link className="btn btn-primary " style={{width:'45%'}} to='/checkout'>Checkout</Link>
            </div>
        </div>
        )
    }    
}

export default Cart