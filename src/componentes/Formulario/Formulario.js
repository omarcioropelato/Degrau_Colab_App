import CampoTexto from "../CampoTexto/CampoTexto";
import './Formulario.css'

function Formulario(){
    return(
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite o nome do colaborador" />
                <CampoTexto label="Cargo" placeholder="Digite o cargo do colaborador" />
                <CampoTexto label="Imagem" placeholder="Informe o caminho da imagem do colaborador"/>
            </form>
        </section>
    )
}

export default Formulario;