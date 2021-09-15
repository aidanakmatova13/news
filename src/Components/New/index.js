import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import axios from "axios";
import Layout from "../Layout";
import './new.css'
import GoBack from "../GoBack";
import Spinner from "../Spinner";
import Notfound from "../Notfound";

const New = () =>{
    const [info, setInfo] = useState({})
    const {id} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [notFound, setNotFound] = useState(false)
    useEffect(() =>{
        axios(`https://613d36a694dbd600172ab88f.mockapi.io/api/news/${id}`)
            .then(({data}) => setInfo(data))
            .catch(() => setNotFound(true))
            .finally(() => setIsLoading(false))
    },[id])

    if (isLoading){
        return <Spinner/>
    }
    if (notFound){
        return <Notfound/>
    }
    return (
        <Layout>
            <div className='container my-5'>
                <GoBack/>
                <div className='grid'>
                    <img src={info.img} alt=""/>
                    <div>
                        <h3>{info.title}</h3>
                        <p>{info.description}</p>
                        <div><b>Автор: {info.author}</b></div>
                        <div><b>Дата: {info.date}</b></div>
                    </div>
                </div>
                <h5 className='comment-title'>Комментарии:</h5>
                <input id='submit' type='textarea' placeholder='Комментарии...'/>
                <label for='submit' className='send-btn'>Отправить</label>
            </div>
        </Layout>
    )
}

export default New;