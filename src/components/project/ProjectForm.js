import styles from './ProjectForm.module.css'

function ProjectForm(){
    return(
        <form>
            <div>
                <input type='text' placeholder='Digite o nome do projeto'/>
            </div>
            <div>
                <input type='number' placeholder='Digite o prazo em dias'/>
            </div>
            <div>
                <select name='category_id'>
                    <option disabled>Selecione a categoria</option>
                </select>
            </div>
            <div>
                <input type='submit' value='Criar Projeto'/>
            </div>
        </form>
    )
}

export default ProjectForm