import {Link} from "react-router-dom";
import './header.css'

const Header = () =>{
    return(
        <>
            <div className='header'>
            <div className='d-flex justify-content-between container'>
                <Link to='/'><h1>ITNEWS</h1></Link>
                <div className='d-flex'>
                    <Link to='/'><h4 className='mr-3'>Главная</h4></Link>
                    <Link to='/news'><h4 className='mr-3'>Новости</h4></Link>
                    <Link to='/login'><h4 className='mr-3'>Войти</h4></Link>
                    <Link to='/register'><h4>Зарегистрироваться</h4></Link>
                </div>
            </div>
            </div>
        </>
    )
}
export default Header;