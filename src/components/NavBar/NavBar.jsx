import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
  const imgTienda = "https://globo.info/wp-content/uploads/2020/08/hot-air-balloon-5390487_1920-1030x694.jpg";
  return (
    <header>
        <Link to={"/"}>
          <img className="imgTienda" src={imgTienda} alt=""/>
        </Link>

        <nav>
            <ul>
              <h1>Mi tienda OnlinE</h1>
                <li>
                  <NavLink className="navegacion" to={""}> Carne </NavLink>
                </li>

                <li>
                  <NavLink className="navegacion"  to={""}> Frutas </NavLink>
                </li>
                <li>
                  <NavLink className="navegacion"  to={""}> Bebidas </NavLink>
                </li>
            </ul>
        </nav>

        <CartWidget />

    </header>
  )
}

export default NavBar