import {Link} from 'react-router-dom';
import './header.scss'
import Logo from './../../assets/Williams_Logo_W02.webp'

function Header(){
    return(
        <header className='header'>
            <img src={Logo} alt="Logo Williams Racing Point" className='Img_Logo'/>

            <nav className="nav_navigation">
                <ul className='navigation'>
                    <li><Link to= '/'>Principal</Link></li>
                    <li><Link to='/carros'>Carros</Link></li>
                    <li><Link to=''>Pilotos</Link></li>
                    <li><Link to=''>Fale Conosco!</Link></li>
                </ul>
            </nav>
            
        </header>
    );

}

export default Header;