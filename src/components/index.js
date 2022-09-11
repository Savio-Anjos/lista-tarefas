import { Link } from 'react-router-dom';
import './header.css'

  function Header() {
    return (
        <div className='cabecalho'>
            <header>
                <Link className='logo' to="/">Lista Tarefas</Link>
                <Link className='logo' to="/favoritos">Favoritas</Link>
            </header>
        </div>
    )
  }

  export default Header;