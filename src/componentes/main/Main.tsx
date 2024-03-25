import './Main.css'
import Estudante from '../estudante/Estudante'
function Main(){
    return(
        <main>
            <Estudante 
                nome="Cãosidente"
                imagem='http://github.com/sh0uwzz.png'
                descricao='Presidente do Brasil'
                githubLink='http://github.com/sh0uwzz'
            />
        </main>
    )
}

export default Main