import Layout from "../Layout";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import './news.css'

const News = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
        axios('https://613d36a694dbd600172ab88f.mockapi.io/api/news')
            .then(({data}) => setNews(data))
    }, [])
    return (
        <Layout>
            <div className='container my-5'>
                <div className='grid'>
                    {
                        news.map(el =>
                            <Link to={`/news/${el.id}`}>
                                <div key={el.id} className='box'>
                                    <img src={el.img} alt=""/>
                                    <h4>{el.title}</h4>
                                </div>
                            </Link>
                        )
                    }
                </div>
            </div>
        </Layout>
    )
}
export default News;