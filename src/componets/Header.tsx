import './Header.css'
import '../utils/Utils.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='header-outer'>
            <div className="header-inner responsive-wrapper">
                <div className="header-logo">
                    <Link className="title" to="/">Test Commerce</Link>
                </div>
                <nav className="header-navigation">
                    <Link to="/carrinho">Carrinho</Link>
                </nav>
            </div>
        </header>
    )
}
export default Header;