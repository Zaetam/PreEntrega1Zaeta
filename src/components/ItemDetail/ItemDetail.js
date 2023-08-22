
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail= ({id, name, img, category, description, price, stock}) => {
    return (
        <article className="shadow p-3 mb-5 bg-body-tertiary rounded">
            <header>
                <h2>
                    {name}
                </h2>

            </header>

            <picture>
                <img src={img} alt={name} />
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
                
                <ItemCount initial={1} stock={stock} onAdd={(contador)=> console.log(contador)}/>  
            </footer>


        </article>
    )
}

export default ItemDetail


