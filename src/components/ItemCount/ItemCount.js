import {useState} from 'react'
import "./ItemCount.css"

const ItemCount=({initial,stock,onAdd})=>{
    const[contador,setContador]=useState(initial)

    
    const decrement=()=>{
        if(contador>initial){
            setContador(contador-1)

        }
    };

    const increment=()=>{
        if(contador<stock){
            setContador(contador+1)

        }
    };

     
    return(
        <div className="divitem">
            <div className="botonesmm">
                <button onClick={decrement} className="btn btn-primary btnmenos">-</button>
                {"   "}{contador}{"   "}
                <button onClick={increment} className="btn btn-primary btnmas">+</button>
            </div>
            <div className="btnagregar">
                <button className="btn btn-primary" onClick={()=> onAdd(contador)} disabled={!stock}>
                Agregar al carrito
                </button>
            </div>

        </div>
    );
};

export default ItemCount;
