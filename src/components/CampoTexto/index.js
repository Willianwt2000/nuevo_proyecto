import "./CampoTexto.css"
const CampoTexto = (props) => {
    const placeHolderModificador = ` ${props.placeholder}...`
    console.log("Datos: ", props.titulo)
    return <div className="campo-texto">
        <label>{ props.titulo.toUpperCase() }</label>
        <input placeholder={ placeHolderModificador }/>

    </div>
}
export default CampoTexto