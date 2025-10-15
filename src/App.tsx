import Principal from './Components/Principal'
import Navbar from './Components/navbar'
import ParticlesBackground from './ParticlesBackground'
import Habilidades from './Components/Habilidades'
import Experiencia from './Components/Experiencia'
import Proyectos from './Components/Proyectos'
//import Contacto from './Components/Contacto'

import './App.css'

function App() {


  return (
    <>
    <Navbar></Navbar>
    <ParticlesBackground></ParticlesBackground>
  <div id="principal">
  <Principal />
</div>

<div id="experiencia">
  <Experiencia />
</div>

<div id="habilidades">
  <Habilidades />
</div>

<div id="proyectos">
  <Proyectos />
</div>



  

    </>
  )
}

export default App
