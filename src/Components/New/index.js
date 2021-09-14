import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import axios from "axios";
import Layout from "../Layout";

const New = () =>{
    const [info, setInfo] = useState({})
    const {id} = useParams()
    useEffect(() =>{
        axios(`https://613d36a694dbd600172ab88f.mockapi.io/api/news/${id}`)
            .then(({data}) => setInfo(data))
    },[])
    return(
        <Layout>
            <div>
                <img src={info.img} alt=""/>
                <p>{info.description}</p>
            </div>
        </Layout>
    )
}

export default New;