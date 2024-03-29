import './style.css'
import Layout from "../../Components/Layout";
import {useEffect, useState} from "react";
import axios from "axios";
import {useForm} from "react-hook-form";
import Spinner from "../../Components/Spinner";
import StudentItem from "../../Components/StudentItem";


const Students = () => {
    const [students, setStudents] = useState([]) //чтобы значение меняласьи выводилось визуально
    const [isOpen, setIsOpen] = useState(false)
    const {register, handleSubmit, formState: {errors}, reset} = useForm()
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        axios('https://613d36a694dbd600172ab88f.mockapi.io/api/students')
            .then(({data}) => {
                setStudents(data)
                setIsLoading(false)
            })
    }, [])

    const sendData = (data) => {
        axios.post('https://613d36a694dbd600172ab88f.mockapi.io/api/students', data)
            .then(({data: student}) => {
                setStudents([...students, student])
                setIsOpen(false)
                reset()
            })
    }

    const delData = (id) => {
        axios.delete(`https://613d36a694dbd600172ab88f.mockapi.io/api/students/${id}`)
            .then(() => setStudents(students.filter(item => item.id !== id)))
    }

    const updateStudent = (id, obj) =>{
        axios.put(`https://613d36a694dbd600172ab88f.mockapi.io/api/students/${id}`, obj)
            .then(() => setStudents(students.map(item => item.id === id ? {...item, ...obj} : item)))
    }

    if (isLoading) {
        return <Spinner/>
    }
    return (
        <Layout>
            <div className='container'>
                <table className="table my-5">
                    <thead className='table-top'>
                    <tr>
                        <th scope="col">№</th>
                        <th scope="col">Имя</th>
                        <th scope="col">Номер телефона</th>
                        <th scope="col">Контракт</th>
                        <th scope="col">Оплачено</th>
                        <th scope="col">Статус</th>
                        <th scope="col">Группа</th>
                        <th scope="col">Пол</th>
                        <th scope="col">Ноутбук</th>
                        <th scope="col">Комментарии</th>
                        <th scope="col">Действия</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        students.map((el, idx) =>
                            <StudentItem key={el.id} el={el} idx={idx} delData={delData} updateStudent={updateStudent}/>
                        )
                    }
                    </tbody>
                </table>
                <button onClick={() => setIsOpen(true)} className='add-btn'>Добавить нового студента</button>
            </div>
            {isOpen && <div className="modal-window">
                <div className="modal-content">
                    {
                        isOpen &&
                        <form onSubmit={handleSubmit(sendData)}>
                            <div className="form-group d-flex justify-content-between">
                                <label>Ваше имя:
                                    <input name='name' className='form-input' type="text"
                                           {...register('name', {required: true})}
                                    />
                                </label>
                                {errors.name && <div className='text-red'>Заполните поле*</div>}

                                <label>Ваш телефон:
                                    <input name='phone' className='form-input' type="number"
                                           {...register('phone', {required: true})}
                                    />
                                </label>
                                {errors.phone && <div className='text-red'>Заполните поле*</div>}
                            </div>
                            <div className="form-group d-flex justify-content-between">
                                <label>Контракт:
                                    <input name='contract' className='form-input' type="number"
                                           {...register('contract', {required: true})}
                                    />
                                </label>
                                {errors.contract && <div className='text-red'>Заполните поле*</div>}

                                <label>Оплачено:
                                    <input name='ispaid' className='form-input' type="number"
                                           {...register('ispaid', {required: true})}
                                    />
                                </label>
                                {errors.ispaid && <div className='text-red'>Заполните поле*</div>}
                            </div>
                            <div className="form-group">
                                <label>Ноутбук:
                                    <input name='notebook' className='form-input' type="text"
                                           {...register('notebook', {required: true})}
                                    />
                                </label>
                                {errors.notebook && <div className='text-red'>Заполните поле*</div>}
                            </div>
                            <div className="form-group d-flex justify-content-between">
                                <label htmlFor="group">Выберите группу:
                                    <div><select {...register('group', {required: true})} >
                                        <option selected>Выберите группу</option>
                                        <option value="Утренняя">Утренняя</option>
                                        <option value="Вечерняя">Вечерняя</option>
                                    </select>
                                    </div>
                                </label>
                                {errors.group && <div className='text-red'>Выберите*</div>}
                                <label htmlFor="gender">Выберите пол:
                                    <div><select {...register('gender', {required: true})} >
                                        <option selected>Выберите пол</option>
                                        <option value="мужской">Мужской</option>
                                        <option value="женский">Женский</option>
                                    </select>
                                    </div>
                                </label>
                                {errors.gender && <div className='text-red'>Выберите*</div>}
                                <label htmlFor="status">Выберите статус:
                                    <div><select {...register('status', {required: true})} >
                                        <option selected>Выберите статус</option>
                                        <option value="active">active</option>
                                        <option value="off">off</option>
                                    </select>
                                    </div>
                                </label>
                                {errors.status && <div className='text-red'>Выберите статус*</div>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="comments">Ваш комментарий:</label>
                                <textarea name="comments" id="comments" style={{width: "100%"}} cols='5'
                                          placeholder='Комментарий...'
                                          {...register('comments')}
                                />
                                {errors.comments && <div className='text-red'>Заполните поле*</div>}
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