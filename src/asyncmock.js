const productos = [
    { nombre: "Cerveza", precio: 20, id: "1", img: "../img/cerveza.jpg", idCat: "1" },
    { nombre: "Leche", precio: 20, id: "2", img: "../img/leche.jpg", idCat: "1" },
    { nombre: "Carne", precio: 50, id: "3", img: "../img/carne.jpg", idCat: "2" },
    { nombre: "Pollo", precio: 30, id: "4", img: "./img/pollo.jpg", idCat:"2" },    
    { nombre: "Naranja", precio: 4, id: "5", img: "../img/naranja.jpg", idCat: "3" },
]

export const getProductos = () => {
        return new Promise((resolve) => {
            setTimeout( () => { 
                resolve(productos);
            }, 2000)
        })
}


export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout (() => {
            const producto = productos.find(prod => prod.id === id )
            resolve(producto);
        }, 2000)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria);
        }, 1000)
    })
}