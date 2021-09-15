import arrow from './img/free-icon-left-black-arrow-45736 (1).svg'
import {useHistory} from "react-router-dom";
import './style.css'


const GoBack = () =>{
    const history = useHistory()
    const back = () =>{
        history.goBack()
    }
    return(
        <>
            <img className='back-img' onClick={back} src={arrow} alt=""/>
        </>
    )
}
export default GoBack