import './header.scss'
import Logo from './../../assets/Logo_ImgW_01.avif'

function Header(){
    return(
        <header className='header'>
            <img src={Logo} alt="Logo Williams Racing Point" className='Img_Logo'/>
            <h1>oii</h1>
            
        </header>
    );

}

export default Header;