import './CampoTexto.css';

const CampoTexto = (props) => {

    let valor = "Bruno de Biazio"

    const placeholderModificada= `${props.placeholder}...`

    const aoDigitado = (qualquercoisa) => {
        valor= qualquercoisa.target.value
        console.log(valor)
    }
    
    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto;