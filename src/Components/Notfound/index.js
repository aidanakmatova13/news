import error from './img/404.png'
import './style.css'

const Notfound = () =>{
    return(
        <div className='error'>
            <img src={error} alt=""/>
        </div>
    )
}
export default Notfound;