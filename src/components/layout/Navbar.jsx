import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/recipes">Receitas</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/occasions">Ocasiões</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/indications">Indico Sabor</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/support">Chama o Chef</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar