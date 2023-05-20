import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='contenedorItem'>
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: {precio} </h3>
        <h3>ID: {id} </h3>
        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam mollitia eos dolor, beatae facilis cumque facere enim perspiciatis recusandae ea placeat ad, laudantium modi quaerat reprehenderit distinctio veniam tenetur fugit.</p>
        <img src= {img} alt={nombre} />
    </div>
  )
}

export default ItemDetail