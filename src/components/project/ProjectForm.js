import styles from './ProjectForm.module.css'

import Input from './Input'
import Select from './Select'
import SubmitBtn from './SubmitBtn'

import {useEffect, useState} from 'react'

function ProjectForm({btnText}){
    const [categories, setCategories] = useState([])

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

    return(
        <form className={styles.form}> 
            <Input type='text' text='Nome do projeto' name='name' placeholder='Digite o nome do seu projeto' />
            <Input type='number' text='Prazo do projeto' name='time' placeholder='Insira o prazo em dias do seu projeto'/>
            <Select options={categories} name='category_id' text='Selecione a categoria' />
            <SubmitBtn text={btnText}/>
        </form>
    )
}

export default ProjectForm