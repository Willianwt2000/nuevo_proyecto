import { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {
	const [mostrarFormulario, actualizarMostrar] = useState(false)
	const [colaboradores, actualizarColaboradores] = useState([
		{
		id: uuidv4(),
		equipo:"Front End",
		foto:"https://scontent.fhex1-1.fna.fbcdn.net/v/t39.30808-6/356254006_3206957362784129_8435093641590899424_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEpMnj0PidcrIDvOAVQQYOdpS7LIfTdEgelLssh9N0SBx6Mcaazy9v1iftB2ZC1wRSgummTj5Z1XpO5Fu_Hfqr8&_nc_ohc=Tkr7yYZFcH4AX9ZEZ4F&_nc_ht=scontent.fhex1-1.fna&oh=00_AfClSttn3Vk7Ic7dQoleyfoOFti3YLvj4T2fenUePn3BMA&oe=654375CD",
		nombre:"Willian Metelien",
		puesto: "Beta One",
		fav:true
	},
	{
		id: uuidv4(),
		equipo:"Programación",
		foto:"https://github.com/harlandlohora.png",
		nombre:"Harland Lohora",
		puesto: "Instructor",
		fav:true
	},
	{
		id: uuidv4(),
		equipo:"Data Science",
		foto:"https://github.com/harlandlohora.png",
		nombre:"Harland Lohora",
		puesto: "Instructor",
		fav:false
	},
	{
		id: uuidv4(),
		equipo:"Móvil",
		foto:"https://github.com/harlandlohora.png",
		nombre:"Harland Lohora",
		puesto: "Instructor",
		fav:true
	},
	{
		id: uuidv4(),
		equipo:"Devops",
		foto:"https://github.com/harlandlohora.png",
		nombre:"Harland Lohora",
		puesto: "Instructor",
		fav:false
	},
	{
		id: uuidv4(),
		equipo:"Ux y Diseño",
		foto:"https://github.com/harlandlohora.png",
		nombre:"Harland Lohora",
		puesto: "Instructor",
		fav:true
	}
]) 


const [equipos, actualizarEquipos] = useState( [
	{	

		id: uuidv4(),
		titulo: "Programación",
		colorPrimario: "#57C278 ",
		colorSecundario: "#D9F7E9"
	},
	{
		id: uuidv4(),
		titulo: "Front End",
		colorPrimario: "#82CFFA",
		colorSecundario: "#E8F8FF"
	},
	{		
		id: uuidv4(),
		titulo: "Data Science",
		colorPrimario: "#A6D157",
		colorSecundario: "#F0F8E2"
	},
	{
		id: uuidv4(),
		titulo: "Devops",
		colorPrimario: "#E06B69",
		colorSecundario: "#FDE7E8"
	},
	{
		id: uuidv4(),
		titulo: "Ux y Diseño",
		colorPrimario: "#DB6EBF",
		colorSecundario: "#FAE9F5"
	},
	{
		id: uuidv4(),
		titulo:"Móvil",
		colorPrimario: "#FFBA05",
		colorSecundario: "#D9F7E9"
	},
	{
		id: uuidv4(),
		titulo:  "Innovación y gestión",
		colorPrimario: "#FFF5D9",
		colorSecundario: "#FFEEDF"
	}
])
const cambiarMostrar = ()=>{
  actualizarMostrar(!mostrarFormulario)
}

/* registrar colaborador */
const registrarColaborador = (colaborador)=>{
  console.log("Nuevo colaborador", "=>", colaborador )
  /* spread operator */
  actualizarColaboradores([...colaboradores, colaborador ])
}

/* Eliminar colaborador */

const eliminarColaborador = (id)=>{
  console.log("Eliminar colaborador, ", id);
  const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
  actualizarColaboradores(nuevosColaboradores)	
}


/* Actualizar color de equipo */

const actualizarColor  = (color, id)=>{
  console.log("Actualizar: ", color, id )
  const equiposActualizados = equipos.map((equipo)=>{
    if(equipo.id === id){
      equipo.colorPrimario = color
    }
    return equipo;
  })
  actualizarEquipos(equiposActualizados)
}


/* Crear equipo */
const crearEquipo = (nuevoEquipo)=>{
  console.log(nuevoEquipo)
  actualizarEquipos([...equipos, {...nuevoEquipo,id: uuidv4()}])
}
/* Like */
const like = (id)=> {
  console.log(" like", id)
  const colaboradoresLikeados = colaboradores.map((colaborador) => {
    if(colaborador.id === id){
      colaborador.fav = !colaborador.fav
    }
    return colaborador
  })
  actualizarColaboradores(colaboradoresLikeados)
} 


return (
  <div>
    <Header />
    {
      mostrarFormulario && <Formulario 
        equipos={equipos.map((patata)=> patata.titulo)}
        registrarColaborador ={registrarColaborador}
        crearEquipo = {crearEquipo}
        />
    }
    <MiOrg cambiarMostrar={cambiarMostrar}/>
    {
      equipos.map((equipo)=> <Equipo 
        datos={equipo} 
        key={equipo.titulo}
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador ={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
        />
      )
    }
    <Footer/>
  </div>
  
);
}



export default App;
