//import {useState} from "react";
import {useContext} from "react";
import { CartContext } from "../../context/CartContext";


const CartItem= ({id,title,image,price,contador}) => {
   // const[subtotal,setSubtotal]=useState(0)

   // setSubtotal(contador*price)

    const{removeItem}=useContext(CartContext)

    //const handleRemove=()=>{
      //  removeItem(id)
    //}

    

    return (
        <article className="cuadradito shadow p-3 mb-5 bg-body-tertiary rounded">
            

            <div>
                <h2>
                    {title}
                </h2>

            </div>

            <section>
                <p>
                    Cantidad:${contador}
                </p>    
                <p>
                    Precio por unidad:${price}
                </p>
                <p>
                    Subtotal:${price*contador}
                </p>
            </section>

            <button onClick={()=> removeItem(id)}>Eliminar</button>


        </article>
    )
}

export default CartItem

//si quisiera compartir imagen agrego , luego de sumar al item detail en item iamge:
//<picture>
             // <img src={image} alt={title} />
              //</picture>


