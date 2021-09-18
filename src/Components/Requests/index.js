import {useEffect, useState} from "react";
import axios from "axios";
import Spinner from "../Spinner";
import Notfound from "../Notfound";
import Layout from "../Layout";
import './style.css'


const Requests = () =>{
    const [requests, setRequests] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [notFound, setNotFound] = useState(false)

    useEffect(() =>{
        axios('https://613d36a694dbd600172ab88f.mockapi.io/api/callback')
            .then(({data}) => setRequests(data))
            .catch(() => setNotFound(true))
            .finally(() => setIsLoading(false))
    },[])

    if (isLoading){
        return <Spinner/>
    }
    if (notFound){
        return <Notfound/>
    }
    return(
        <Layout>
            <div className='container'>
                <table className="table my-5">
                <thead className='table-top'>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone number</th>
                    <th scope="col">Email address</th>
                </tr>
                </thead>
                <tbody>
                {
                    requests.map((el,idx) =>
                        <tr>
                            <th scope="row">{idx+1}</th>
                            <td>{el.name}</td>
                            <td>{el.phone}</td>
                            <td>{el.email}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
            </div>
        </Layout>
    )
}
export default Requests