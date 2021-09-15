import './footer.css'
import logo from '../Header/img/All_News-logo-62939EED68-seeklogo.com.png'

const Footer = () =>{
    return(
        <>
            <div className='footer'>
                <div className='container'>
                    <div className='d-flex justify-content-between'>
                        <h4>
                            &#xA9; Aidana Akmatova
                        </h4>
                        <img className='logo-img' src={logo} alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;