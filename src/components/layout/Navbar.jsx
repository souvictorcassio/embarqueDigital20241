import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <ul>
            <li>
                <Link to="/recipes">Receitas</Link>
            </li>
            <li>
                <Link to="/occasions">Ocasiões</Link>
            </li>
            <li>
                <Link to="/indications">Indico Sabor</Link>
            </li>
            <li>
                <Link to="/support">Chama o Chef</Link>
            </li>
        </ul>
    )
}

export default Navbar