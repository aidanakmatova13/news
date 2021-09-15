import {Link} from "react-router-dom";
import './header.css'
import logo from './img/All_News-logo-62939EED68-seeklogo.com.png'

const Header = () => {
    return (
        <>
            <div className='header'>
                <div className='d-flex justify-content-between container'>
                    <Link to='/'><img src={logo} className='logo-img' alt=""/></Link>
                    <div className='d-flex'>
                        <Link to='/'><h5 className='mr-3'>Главная</h5></Link>
                        <Link to='/news'><h5 className='mr-3'>Новости</h5></Link>
                        <Link to='/login'><h5 className='mr-3'>Войти</h5></Link>
                        <Link to='/register'><h5>Зарегистрироваться</h5></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;