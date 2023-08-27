import './Header.css'

function Header() {
    return (
        <header className='header-outer'>
            <div className="header-inner responsive-wrapper">
                <div className="header-logo">
                    <a className="title" href="#">Test Commerce</a>
                </div>
                <nav className="header-navigation">
                    <a href="/carrinho">Carrinho</a>
                </nav>
            </div>
        </header>
    )
}
export default Header;