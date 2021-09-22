import React, {useState} from 'react';
import {useForm} from "react-hook-form";


const StudentItem = ({el, idx, delData, updateStudent}) => {
    const [showModal, setShowModal] = useState(false)
    const {register, handleSubmit, formState: {errors}, reset} = useForm()

    const saveData = (data) => {
        updateStudent(el.id, data)
        setShowModal(false)
    }
    return (
        <>
        <tr>
            <th scope="row">{idx + 1}</th>
            <td>{el.name}</td>
            <td>{el.phone}</td>
            <td>{el.contract}</td>
            <td>{el.ispaid}</td>
            <td>{el.status}</td>
            <td>{el.group}</td>
            <td>{el.gender}</td>
            <td>{el.notebook}</td>
            <td>{el.comments}</td>
            <td>
                <button className='edit-btn' onClick={() => setShowModal(true)}>Редактировать</button>
                <button className='del-btn' onClick={() => delData(el.id)}>Удалить</button>
            </td>
        </tr>
    {showModal && <div className="modal-window">
        <div className="modal-content">
            {showModal &&
            <form onSubmit={handleSubmit(saveData)}>
                <div className="form-group d-flex justify-content-between">
                    <label>Ваше имя:
                        <input defaultValue={el.name} name='name' className='form-input' type="text"
                               {...register('name', {required: true})}
                        />
                    </label>
                    {errors.name && <div className='text-red'>Заполните поле*</div>}

                    <label>Ваш телефон:
                        <input defaultValue={el.phone} name='phone' className='form-input' type="number"
                               {...register('phone', {required: true})}
                        />
                    </label>
                    {errors.phone && <div className='text-red'>Заполните поле*</div>}
                </div>
                <div className="form-group d-flex justify-content-between">
                    <label>Контракт:
                        <input defaultValue={el.contract} name='contract' className='form-input' type="number"
                               {...register('contract', {required: true})}
                        />
                    </label>
                    {errors.contract && <div className='text-red'>Заполните поле*</div>}

                    <label>Оплачено:
                        <input defaultValue={el.ispaid} name='ispaid' className='form-input' type="number"
                               {...register('ispaid', {required: true})}
                        />
                    </label>
                    {errors.ispaid && <div className='text-red'>Заполните поле*</div>}
                </div>
                <div className="form-group">
                    <label>Ноутбук:
                        <input defaultValue={el.notebook} name='notebook' className='form-input' type="text"
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
                    <textarea defaultValue={el.comments} name="comments" id="comments" style={{width: "100%"}} cols='5'
                              placeholder='Комментарий...'
                              {...register('comments')}
                    />
                    {errors.comments && <div className='text-red'>Заполните поле*</div>}
                </div>
                <button className='send-btn' type="submit">Сохранить</button>
            </form>
            }
            <button onClick={() => setShowModal(false)} className="close-modal">&#215;</button>
        </div>
    </div>}
        </>
    );
};

export default StudentItem;