
import{useState,useEffect} from 'react'
import {getProducts, getProductsByCategory} from '../components/asyncMock'
import ItemList from '../components/iItemList/ItemList'
import {useParams} from 'react-router-dom'
import "./ItemListContainer/ItemListContainer.css"


const ItemListContainer = () =>{
    //me traigo el array productos
    const [products, setProducts]= useState([])

    const{categoryId}=useParams()

    useEffect(()=>{
        const asyncFunc= categoryId? getProductsByCategory :getProducts

        asyncFunc(categoryId)
            .then (response => {
                setProducts(response)
            })
            .catch(error=> {
                console.error (error)
            })
        }, [categoryId])

  
    
    return ( 
        <div>
            <ItemList products={products} />
            
        </div>

    );
};
    
export default ItemListContainer;
