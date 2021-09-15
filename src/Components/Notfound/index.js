import error from './img/404_error.png'
import './style.css'

const Notfound = () =>{
    return(
        <div className='error'>
            <img src={error} alt=""/>
            <h1 className='error-title'>СТРАНИЦА НЕ НАЙДЕНА!</h1>
        </div>
    )
}
export default Notfound;