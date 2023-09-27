import "./ListaOpciones.css"
const ListaOpciones =  () => {

    //Metodo map para recorrer el arreglo -> arreglo.map( (equipo, index) => { 
    // return <option><option/>
   // } )
    const equipos = [
        "Programación",
        "Front-End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión"
    ]

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select>
            {equipos.map( (equipo, index) => <option key={index}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones    
    


/*
    {equipos.map( (equipo, index) => {
                return <option key={index}>{equipo}</option>
            })}
    (Same code but cleaner☝️☝️☝️☝️☝️☝️☝️☝️☝️)
    {equipos.map( (equipo, index) => <option key={index}>{equipo}</option>)}
 */