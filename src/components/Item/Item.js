import {Link} from 'react-router-dom'

const Item= ({id, name, img, price, stock}) =>{
    return (
        <article className="shadow p-3 mb-5 bg-body-tertiary rounded">
            <header>
                <h2>
                    {name}
                </h2>
            </header>

            <picture>
                <img src={img} alt={name}/>
            </picture>
            <section>
                <p>
                    Precio: ${price}
                </p>

                <p>
                    Stock disponible:{stock}
                </p>
            </section>

            <footer>
                <Link to={`/item/${id}`} className='Option'> Ver detalle </Link>
            </footer>

        </article>
    )
}

export default Item