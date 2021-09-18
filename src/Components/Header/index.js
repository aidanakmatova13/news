import {Link, NavLink} from "react-router-dom";
import './header.css'
import logo from './img/All_News-logo-62939EED68-seeklogo.com.png'
import {useState} from "react";
import axios from "axios";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [sentSuccess, setSentSuccess] = useState(false)
    const [user, setUser]  = useState({
        name: '',
        phone: '',
        email: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://613d36a694dbd600172ab88f.mockapi.io/api/callback", user)
            .then(() => {
                setSentSuccess(true)
                setTimeout(() => {
                    setIsOpen(false)
                    setSentSuccess(false)
                }, 2000)
            })
    }
    const handleChange = (e) =>{
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <header>
            <div className='header'>
                <div className='d-flex justify-content-between container'>
                    <Link to='/'><img src={logo} className='logo-img' alt=""/></Link>
                    <div className='d-flex'>
                        <NavLink exact to='/'><h5 className='mr-3'>Главная</h5></NavLink>
                        <NavLink to='/news'><h5 className='mr-3'>Новости</h5></NavLink>
                        <NavLink to='/requests'><h5 className='mr-3'>Заявки</h5></NavLink>
                        <NavLink to='/login'><h5 className='mr-3'>Войти</h5></NavLink>
                        <NavLink to='/register'><h5  className='mr-3'>Зарегистрироваться</h5></NavLink>
                        <button onClick={() => setIsOpen(true)} className='callback'>Свяжитесь со мной</button>
                    </div>
                </div>
            </div>
            {isOpen && <div className="modal-window">
                    <div className="modal-content">
                        {
                            sentSuccess ? 'Успешно отправлено!'
                                :
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Ваше имя:</label>
                                        <input name='name' id='name' required className='form-input' type="text"
                                               onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Ваш телефон:</label>
                                        <input name='phone' id='phone' required className='form-input'  type="text"
                                               onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Ваша почта:</label>
                                        <input name='email' id='email' required className='form-input'  type="email"
                                               onChange={handleChange}
                                        />
                                    </div>
                                    <button className='send-btn' type="submit">Отправить</button>
                                </form>
                        }
                        <button onClick={() => setIsOpen(false)} className="close-modal">&#215;</button>
                    </div>
                </div>}
        </header>
    )
}

export default Header;