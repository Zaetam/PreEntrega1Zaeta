import{useState,useEffect} from "react"
//import {getProducts, getProductsByCategory} from '../components/asyncMock'
import ItemList from '../components/iItemList/ItemList'
import {useParams} from 'react-router-dom'
import "./ItemListContainer/ItemListContainer.css"
import {getDocs, collection, query, where, getFirestore} from 'firebase/firestore'
import db from "../index.js"





const ItemListContainer = () =>{
    //me traigo el array productos
    const [products, setProducts]= useState([])
    const [isLoading, setIsLoading ] = useState(true)

    const{categoryId}=useParams()


    useEffect(() =>{
     // const db=getFirestore()

      //esto lo acabo de agregar
     // const collectionRef=collection(db, 'items')

      //getDocs(collectionRef).then (snapshot => {
        //console.log(snapshot.docs)
      
      
      //})
       
      //},[])

      //hasta aca
      
      const collectionRef=categoryId
        ? query(collection(db,'items'),where('category','==', categoryId))
          : collection(db, 'items')

        getDocs(collectionRef).then (snapshot => {
          const productsAdapted =snapshot.docs.map(doc =>({id: doc.id, ...doc.data()}))
          setProducts(productsAdapted)

            
        })

            .catch(error=>{
                console.log(error)
            })
        
                     
    },[categoryId]);




        //antes lo hacía por asyncmod

        //LO QUE SIRVE

       // useEffect(()=>{



        //const asyncFunc= categoryId? getProductsByCategory :getProducts

        //asyncFunc(categoryId)
          //.then (response => {
            //setProducts(response)
            //})
            //.catch(error=> {
              //console.error (error)
           //})
        //}, [categoryId])

  
    
    return ( 
        <div>
            
            <ItemList products={products} />
           
            
        </div>

    )
}
    
export default ItemListContainer
