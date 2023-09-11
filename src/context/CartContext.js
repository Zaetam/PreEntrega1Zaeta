import{ createContext, useState} from "react"


export const CartContext= createContext({
    cart:[]
})

export const CartProvider= ({children})=> {
    const [cart, setCart]=useState([])

    //agrego dos variables más

    //suma de cantidades

   // const [totalQuantity, setTotalQuantity]=useState([])

    const reduction=function acumular (acumulador,producto){
        acumulador=acumulador + producto.contador
        return acumulador
    }
   const totalQuantity=cart.reduce(reduction,0)
    //setTotalQuantity(cantidadTotal)

    //suma de precio*cantidades

   // const [total, setTotal]=useState([])

    const sumPrice=function sumar (acumuladorSuma,producto){
        acumuladorSuma=acumuladorSuma + producto.contador*producto.price
        return acumuladorSuma
    }
   const total=cart.reduce(sumPrice,0)
   // setTotal(importeTotal)

    console.log(cart)

    const addItem=(item, contador) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, contador}])
        } else {
            console.error('El producto ya fue agregado')
        }
    }

    const removeItem= (itemId)=> {
        const cartUpdated=cart.filter(prod=> prod.id !== itemId)
        setCart (cartUpdated)
    }

    const clearCart=() => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

  //useEffect
 //   useEffect (()=>{
   //     const cantidadTotal=cart.reduce(reduction,0)
     //   setTotalQuantity(cantidadTotal)
       // const importeTotal=cart.reduce(sumPrice,0)
        //setTotal(importeTotal)

    //}, [cart])



    return(
        <CartContext.Provider value={{cart, totalQuantity, total, addItem, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}