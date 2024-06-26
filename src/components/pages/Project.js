import styles from './Project.module.css'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Container from '../layout/Container'
import Loading from '../layout/Loading'

function Project(){
    const { id } = useParams()
    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    useEffect(() => {
        fetch(`http://localhost:5000/projects/${id}`, {
            method:'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setProject(data)
            })
            .catch((err) => console.log(err))
    }, [id])

    function toggleProjectForm(){
        setShowProjectForm(!showProjectForm)
    }

    return(
        <>
            {project.name ? (
                <div className={styles.project_details}>
                    <Container customClass='column'>
                        <div className={styles.details_container}>
                            <h1>{project.name}</h1>
                            <button className={styles.btn} onClick={toggleProjectForm}>
                                { !showProjectForm ? 'Editar projeto' : 'Aplicar'}
                            </button>
                            { !showProjectForm ? (
                                <div className={styles.form_info}>
                                    <p>
                                        <span>Categoria: </span>{project.category.name}
                                    </p>
                                    <p>
                                        <span>Dias totais: </span>{project.time}
                                    </p>
                                    <p>
                                        <span>Dias ocupados: </span>{project.time_spent}
                                    </p>
                                </div> 

                            ) : 
                            (
                                <div className={styles.form_info}>

                                </div>
                            )}
                        </div>
                    </Container>

                </div>
            
            ): <Loading/>}
        </>
        
    )
}
export default Project