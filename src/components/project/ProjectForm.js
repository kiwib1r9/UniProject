import styles from './ProjectForm.module.css'
import Input from './Input'
import Select from './Select'
import SubmitBtn from './SubmitBtn'

function ProjectForm({btnText}){
    return(
        <form className={styles.form}> 
            <Input type='text' text='Nome do projeto' name='name' placeholder='Digite o nome do seu projeto' />
            <Input type='number' text='Prazo do projeto' name='time' placeholder='Insira o prazo em dias do seu projeto'/>
            <Select name='category_id' text='Selecione a categoria' />
            <SubmitBtn text={btnText}/>
        </form>
    )
}

export default ProjectForm