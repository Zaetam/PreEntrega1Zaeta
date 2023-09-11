import {Link} from 'react-router-dom'

const Item= ({id, title, image, price, stock}) =>{
    return (
        <article className="shadow p-3 mb-5 bg-body-tertiary rounded">
            <header>
                <h2>
                    {title}
                </h2>
            </header>

            <picture>
                <img src={image} alt={title}/>
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
                <Link to={`/item/${id}`} className='Option btn btn-primary '> Ver detalle </Link>
            </footer>

        </article>
    )
}

export default Item