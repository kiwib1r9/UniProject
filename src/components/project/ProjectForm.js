import styles from './ProjectForm.module.css'

import Input from './Input'
import Select from './Select'
import SubmitBtn from './SubmitBtn'

import {useEffect, useState} from 'react'

function ProjectForm({handleOnSubmit, btnText, projectData}){
    const [categories, setCategories] = useState([])

    const [project, setProject] = useState(projectData || {})

    useEffect(() =>{
        fetch('http://localhost:5000/categories',{
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {setCategories(data)})
            
            .catch((err) => console.log(err))        
    }, [])

    const submit = (e) => {
        e.preventDefault()
        handleOnSubmit(project)
    }

    function handleSelect(e){
        setProject({ ...project, category:{
                                    id: e.target.value,
                                    name: e.target.options[e.target.selectedIndex].text
        } })
    }

    function handleChange(e){
        setProject({ ...project, [e.target.name]: e.target.value })

    }

    return(
        <form onSubmit={submit} className={styles.form}> 
            <Input type='text' text='Nome do projeto' name='name' placeholder='Digite o nome do seu projeto' handleOnChange={handleChange}/>
            <Input type='number' text='Prazo do projeto' name='time' placeholder='Insira o prazo em dias do seu projeto' handleOnChange={handleChange}/>
            <Select options={categories} name='category_id' text='Selecione a categoria' value={project.category ? project.category.id : ''} handleOnChange={handleSelect}/>
            <SubmitBtn text={btnText}/>
        </form>
    )
}

export default ProjectForm