import styles from './ProjectCard.module.css'

import { Link } from 'react-router-dom';
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

function ProjectCard({id, name, time, category, handleRemove}){
    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)

    }
    const categoryMapping = {
        'Artes': 'artes',
        'CPD': 'cpd',
        'ARQ1': 'arq1',
        'Teoria da Computação': 'teoria',
        'Bolsa e Trabalho': 'bolsa',
        'Computação Gráfica': 'fcg',
        'Linguagens Formais e Autômatos': 'lfa',
        'Coreano': 'coreano',
    };

    return(
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p><span>Prazo: </span>{time} dias</p>
            <p className={styles.category_text}>
                <span className={`${styles[categoryMapping[category]]}`}></span>{category}
            </p>
            <div className={styles.project_card_actions}>
                <Link to={`/project/${id}`}>
                    <BsPencil/> Editar
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill/> Remover
                </button>
            </div>
        </div>
    )
}

export default ProjectCard