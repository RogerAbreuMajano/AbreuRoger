import './CartWidget.css'
const CartWidget = () => {
    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/3394/3394009.png";
    return (
        <div>
            <img className= 'imgCarrito' src={imgCarrito} alt="carrito" />
            <strong>5</strong>
        </div>
    )
}

export default CartWidget