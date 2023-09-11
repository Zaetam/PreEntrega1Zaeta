import {useState, useEffect} from 'react'
//import {getProductById} from '../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'
import "./ItemDetailContainer.css"
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer=() => {
    const [product, setProduct] = useState (null)

    const {itemId}=useParams()
    //ahora usando firestore

   useEffect(()=>{
      const db=getFirestore();
       const docRef=doc(db,'items',itemId);

        getDoc(docRef).then(snapshot=> {
        setProduct({id:snapshot.id, ...snapshot.data()});
      });
   },[itemId])

//cuando usaba asyncmode

   //useEffect(() =>{
     // getProductById (itemId)
       //.then (response => {
         //   setProduct (response)
        //})
        //.catch (error => {
          //console.error(error)
        //})
    
      //},[itemId])


    return (
        <div className="divitemdetail"> 
            <ItemDetail {...product} />
        </div>
    )

    }

export default ItemDetailContainer
    
    
    
    
    
  