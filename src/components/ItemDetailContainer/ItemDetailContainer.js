import {useState, useEffect} from 'react'

import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'
import "./ItemDetailContainer.css"
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer=() => {
  const [product, setProduct] = useState (null)

  const {itemId}=useParams()
    

  useEffect(()=>{
    const db=getFirestore();
    const docRef=doc(db,'items',itemId);

    getDoc(docRef).then(snapshot=> {
      setProduct({id:snapshot.id, ...snapshot.data()});
  
    });
  },[itemId])


  return (
    <div className="divitemdetail"> 
      <ItemDetail {...product} />
    </div>
  )

}

export default ItemDetailContainer
    
    
    
    
    
  