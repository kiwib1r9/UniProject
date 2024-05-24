import styles from './Home.module.css'
import LinkButton from '../layout/LinkButton'


function Home(){
    return(
        <section className={styles.home_container}> 
            <h1>Bem-vindo ao <span>Uni</span></h1>
            <LinkButton to="/newproject" text="Criar Projeto"/>
        </section>
    ) 
    
}
export default Home