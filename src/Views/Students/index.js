import './style.css'
import Layout from "../../Components/Layout";
import {useEffect, useState} from "react";
import axios from "axios";
import {useForm} from "react-hook-form";
import Spinner from "../../Components/Spinner";
import StudentItem from "../../Components/StudentItem";


const Students = () =>{
    const [students,setStudents] = useState([]) //чтобы значение меняласьи выводилось визуально
    const [isOpen, setIsOpen] = useState(false)
    const {register, handleSubmit, formState: {errors}, reset} = useForm()
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() =>{
        axios('https://613d36a694dbd600172ab88f.mockapi.io/api/students')
            .then(({data}) => {
                setStudents(data)
                setIsLoading(false)
            })
    },[])

    const sendData = (data) =>{
        axios.post('https://613d36a694dbd600172ab88f.mockapi.io/api/students', data)
            .then(({data:student}) =>{
                setStudents([...students, student])
                setIsOpen(false)
                reset()
            })
    }

    const delData = (id) =>{
        axios.delete(`https://613d36a694dbd600172ab88f.mockapi.io/api/students/${id}`)
            .then(() => setStudents(students.filter(item => item.id !== id)))
    }

    if (isLoading){
        return <Spinner/>
    }
    return(
        <Layout>
            <div className='container'>
                <table className="table my-5">
                    <thead className='table-top'>
                    <tr>
                        <th scope="col">№</th>
                        <th scope="col">Имя</th>
                        <th scope="col">Номер телефона</th>
                        <th scope="col">Контракт</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        students.map((el,idx) =>
                            <StudentItem key={el.id} el={el} idx={idx} delData={delData}/>
                        )
                    }
                    </tbody>
                </table>
                <button onClick={() => setIsOpen(true)} className='add-btn' >Добавить нового студента</button>
            </div>
            {isOpen && <div className="modal-window">
                <div className="modal-content">
                    {
                        isOpen &&
                            <form onSubmit={handleSubmit(sendData)}>
                                <div className="form-group">
                                    <label htmlFor="name">Ваше имя:</label>
                                    <input name='name' id='name' className='form-input' type="text"
                                           {...register('name', {required:true})}
                                    />
                                    {errors.name && <div className='text-red'>Заполните поле*</div>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Ваш телефон:</label>
                                    <input name='phone' id='phone' className='form-input'  type="text"
                                           {...register('phone', {required:true})}
                                    />
                                    {errors.phone && <div className='text-red'>Заполните поле*</div>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contract">Контракт:</label>
                                    <input name='contract' id='contract' className='form-input'  type="text"
                                           {...register('contract', {required:true})}
                                    />
                                    {errors.contract && <div className='text-red'>Заполните поле*</div>}
                                </div>
                                <button className='send-btn' type="submit">Добавить</button>
                            </form>
                    }
                    <button onClick={() => setIsOpen(false)} className="close-modal">&#215;</button>
                </div>
            </div>}
        </Layout>
    )
}

export default Students