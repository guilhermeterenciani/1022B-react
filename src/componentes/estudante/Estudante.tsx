import './Estudante.css'
function Estudante(props:{nome:string,imagem:string,descricao:string,githubLink:string}){
    return(
        <main>
            <div className="box-estudante">
                <img src={props.imagem}></img>
                <h3 className="nome-estudante">
                    {props.nome}
                </h3>
                <p className="descricao-estudante">
                    {props.descricao}
                </p>
                <a href='{props.githubLink}'>
                    GitHub
                </a>
            </div>
        </main>
    )
}
export default Estudante