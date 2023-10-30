import { useState } from "react"
import "./CampoTexto.css"

const CampoTexto = (props) => {
    const placeHolderModificador = ` ${props.placeholder}...`
    const [text, setText] = useState("")
    return(
        <div className="campo-texto">
            <input
            type={props.type ? props.type : 'text'}
            placeholder={placeHolderModificador}
            value={text}
            onChange={e=>setText(e.target.value)}/>
            </div>
    )
}
export default CampoTexto