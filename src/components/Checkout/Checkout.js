import { useContext, useState } from "react"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import { CartContext } from "../../context/CartContext"
import { Timestamp, documentId, writeBatch } from "firebase/firestore"
import db from "../../index.js"
import {getDocs, collection, query, where,addDoc} from 'firebase/firestore'
import './Checkout.css'




const Checkout =() => {
    const[loading, setLoading]=useState(false)
    
    const[orderId,setOrderId]=useState('')
    //me traigo del contexto los items del carrito
    const{cart,total, clearCart}= useContext(CartContext)

    const createOrder=async({name,phone,email})=>{
        setLoading(true)
        //formo un arreglo con datos del usuario+carrito

        try{
            const objOrder={
                buyer:{name, phone, email},
                items:cart,
                total:total,
                date:Timestamp.fromDate (new Date())
            }


            const batch= writeBatch(db)

            const outOfStock=[]
            //en una variable docs guardo detale de los items en el carrito que vienen de firestore y tengo su stock y lo comparo con el contador del carrito para ver que no tenga más pedido que el stock
            const ids=cart.map (prod => prod.id)
            const productsRef= collection (db,'items')
            const productsAddedFromFirestore= await getDocs (query (productsRef,where (documentId(), 'in', ids)))
            const{docs}= productsAddedFromFirestore
            docs.forEach (doc =>{
                const dataDoc=doc.data()
                const stockDb=dataDoc.stock

                const productAddedToCart=cart.find(prod=> prod.id === doc.id)
                const prodQuantity= productAddedToCart?.contador

                if (stockDb >= prodQuantity) {
                    batch.update (doc.ref, {stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({id:doc.id, ...dataDoc})
                }

            })

            //ahora sube la información a items y crea las ordenes

            if(outOfStock.length ===0){
                await batch.commit ()

                const orderRef=collection (db,'orders')
                const orderAdded= await addDoc (orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            }else{
                console.error('hay productos que están fuera de stock')
            }
        } catch(error){
            console.log(error)
        }finally{
            setLoading(false)
        }
    }
    if(loading){
        return <h2 className="texto">Se está generando su orden ...</h2>
    }
    if(orderId){
        return (
        <div>
        <h2 className="texto">Gracias por su compra!</h2>
        <h2 className="texto"> El id de su orden es: {orderId} </h2>
        </div>
        )
    }

    return (
        <div>
            <h1>Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )
}

export default Checkout