import {useState } from "react"
// import { Pokemon } from "./Pokemon"

export const App = () => {
  
  const [first, setfirst] = useState('')
  const [images, setImages] = useState('')

  const getPokemon=(e)=>{
    setfirst(e.target.value)
    // mostrarPokemon(first)
  }
  
  const mostrarPokemon = async () => {
    let url = `https://pokeapi.co/api/v2/pokemon/${first}`
    const res = await fetch(url)
    const data =await res.json()
    setImages(data.sprites.front_default)
    
  }

  // }
  return (
    <>
      <h1>pokemon Api</h1>    
      <h2>ejercicio</h2>
      <p>Que crees de cero un front, que consumas apis, que hagas un push a github y deployes tu aplicacion a produccion Ingrese un numero de pagina </p>
      <input 
        type="number" 
        onChange={getPokemon}
        value={first}
        />

      <button onClick={mostrarPokemon}>obtener</button>
      <br />
      <img src={images} alt="" />
    </>
  )

}
