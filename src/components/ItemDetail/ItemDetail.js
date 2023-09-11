import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import "./ItemDetail.css"
import {useContext, useState} from 'react'

import { CartContext } from '../../context/CartContext'


    const ItemDetail= ({id, title, image, category, description, price, stock}) => {
    const[quantityAdded, setQuantityAdded]=useState(0)

    const {addItem}=useContext(CartContext)

    const handleOnAdd= (contador)=> {
        setQuantityAdded(contador)

        const item={
            id,title,price
        }

        addItem(item,contador)
    }

    return (
        <article className="cuadradito shadow p-3 mb-5 bg-body-tertiary rounded">
            <header>
                <h2>
                    {title}
                </h2>

            </header>

            <picture>
                <img src={image} alt={title} />
            </picture>

            <section>
                <p>
                    Categoria: {category}
                </p>

                <p>
                    Descripción: {description}
                </p>

                <p>
                    Precio:${price}
                </p>
            </section>

            <footer>
                {quantityAdded>0 ? (
                    <Link to='/cart'> Terminar compra</Link>
                ) :(
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                )
                 }
            </footer>


        </article>
    )
}

export default ItemDetail


