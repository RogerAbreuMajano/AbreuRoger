import { useState, useEffect } from "react"

const Categorias = () => {
  const [categoria, setCategoria] = useState("");

  useEffect( ()=>{
    document.title = `Categoria ${categoria}`;
  }, [categoria])

  const handleClick = (categoria)=>{
    setCategoria(categoria);
  }
  
  return (
    <div>
        <h1>Categoria de productos</h1>

            <ul>
                <button onClick={ () => handleClick("Viveres")}>Viveres </button>
                <button onClick={ () => handleClick("Carnes")}>Carnes</button>
                <button onClick={ () => handleClick("Lacteos")}>Lacteos</button>
                <button onClick={ () => handleClick("Frutas")}>Frutas</button>
            </ul>
            
    </div>
  )
}

export default Categorias