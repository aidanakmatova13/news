import Layout from "../Layout";
import homepage from './img/Breaking-News.jpg'
import './style.css'


const Homepage = () =>{
    return(
        <Layout>
            <div><img className='main' src={homepage} alt=""/></div>
        </Layout>
    )
}
export default Homepage;