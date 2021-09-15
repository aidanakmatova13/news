import Layout from "../Layout";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import './style.css'
import GoBack from "../GoBack";

const News = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
        axios('https://613d36a694dbd600172ab88f.mockapi.io/api/news')
            .then(({data}) => setNews(data))
    }, [])
    return (
        <Layout>
            <div className='container my-5'>
                <GoBack/>
                <div className='row'>
                    {
                        news.map(el =>
                            <div key={el.id} className='col-4'>
                                <div className='box'>
                                    <Link to={`/news/${el.id}`}>
                                        <img className='news-img' src={el.img} alt=""/>
                                        <div className='title-box'><h5>{el.title}</h5></div>
                                    </Link>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </Layout>
    )
}
export default News;