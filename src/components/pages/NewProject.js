import styles from './NewProject.module.css'
import ProjectForm from '../project/ProjectForm'

import {useNavigate} from 'react-router-dom'

function NewProject(){

    const navigate = useNavigate()

    function createPost(project){
        // Inicializaçao
        //project.time = 0
        project.tarefas = []

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(project)
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                // redirect
                navigate('/projects', { state: { message: 'Projeto criado com sucesso!' } });
            })
            .catch((err) => console.log(err))
        //
    }


    return(
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar suas pendências</p>
            < ProjectForm handleOnSubmit={createPost} btnText='Criar projeto' />
        </div>
    )
}
export default NewProject