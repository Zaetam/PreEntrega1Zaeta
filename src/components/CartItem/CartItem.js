
import {useContext} from "react";
import { CartContext } from "../../context/CartContext";
import "./Cartitem.css"


const CartItem= ({id,title,image,price,contador}) => {
    const{removeItem}=useContext(CartContext)
 
    return (
      
        <article className=" listado p-3 bg-body-tertiary rounded">
            <h2>
                {title}
            </h2>

            <p>
                Cantidad: {contador}
            </p>    
            <p>
                Precio por unidad: ${price}
            </p>
            <p>
                Subtotal: ${price*contador}
            </p>
               

            <button className="botoneliminar btn btn-secondary"onClick={()=> removeItem(id)}>Eliminar</button>


        </article>
       
    )
}

export default CartItem



