

const products=[
    {
        id:'1',
        name:'Bikini Cali Tostado',
        price:12250,
        category:'Beachwear',
        img: "/imagenes/beachwear_1.jpeg",
        stock:30,
        description: 'Descripción Bikini Cali Tostado'
    },

    {
        id:'2',
        name:'Bikini Cali Acqua',
        price:12250,
        category:'Beachwear',
        img:"/imagenes/beachwear_2.jpeg",
        stock:30,
        description: 'Descripción Bikini Cali Acqua'
    },

    {
        id:'3',
        name:'Bikini Cali Amalfi',
        price:12250,
        category:'Beachwear',
        img:"/imagenes/beachwear_3.jpeg",
        stock:30,
        description: 'Descripción Bikini Cali Amalfi'
    },


    //día

    {
        id:'4',
        name:'Remera Kanda',
        price:13400,
        category:'Día',
        img: "/imagenes/dia_1.jpg",
        stock:30,
        description: 'Descripción Remera Kanda'
    },

    {
        id:'5',
        name:'Musculosa Ojos',
        price:7490,
        category:'Día',
        img:"/imagenes/dia_2.jpeg",
        stock:30,
        description: 'Descripción Musculosa Ojos'
    },

    {
        id:'6',
        name:'Remera Smile',
        price:9275,
        category:'Día',
        img:"/imagenes/dia_3.jpeg",
        stock:30,
        description: 'Descripción Remera Smile'
    },



 //noche

 {
    id:'7',
    name:'Vestido Padma',
    price:85000,
    category:'Noche',
    img: "/imagenes/noche_1.jpg",
    stock:30,
    description: 'Descripción Vestido Padma'
},

{
    id:'8',
    name:'Vestido Luna',
    price:85000,
    category:'Noche',
    img:"/imagenes/noche_2.jpg",
    stock:30,
    description: 'Descripción Vestido Luna'
},

{
    id:'9',
    name:'Vestido Asim',
    price:55000,
    category:'Noche',
    img:"/imagenes/noche_3.jpg",
    stock:30,
    description: 'Descripción Vestido Asim'
},

]

export const getProducts =() => {
    return new Promise ((resolve)=> {
        setTimeout (()=> {
            resolve (products)
        
        },500)
    })
}

export const getProductById= (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve (products.find(prod => prod.id === productId))
        }, 500)
    })
}



export const getProductsByCategory= (prodCategory) => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            const filteredProducts = products.filter (prod => prod.category === prodCategory);
            resolve (filteredProducts);
        }, 500);
    });
};

//export const getProductsByCategory= (categoryId) => {
  //  return new Promise ((resolve) => {
    //    setTimeout(() =>{
      //      resolve (products.find(prod => prod.category === categoryId))
       // }, 500)
    //})
//}