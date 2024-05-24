import {Link} from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css'


function Navbar(){
    return(
        <nav class={styles.navbar}>
            <Container>
                <Link to="/"> 
                    <img src=""/>
                </Link>
                <ul class={styles.list}>
                    <li class={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li class={styles.item}>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li class={styles.item}>
                        <Link to="/company">Company</Link>
                    </li>
                </ul>

            </Container>

        </nav>
    )
}

export default Navbar