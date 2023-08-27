import "./Formulario.css"
import CampoTexto from "../CampoTexto/index"

//Components
const Formulario = () => {
    return <section className="formulario">
        <form>
            <h2>Rellena el Formulario para crear el colaborador.</h2>
            <CampoTexto />
            <CampoTexto />
            <CampoTexto />
        </form>
    </section>
}

export default Formulario