import React from 'react';

const StudentItem = ({el, idx, delData, setIsOpenEdit}) => {
    return (
            <tr>
                <th scope="row">{idx+1}</th>
                <td>{el.name}</td>
                <td>{el.phone}</td>
                <td>{el.contract}</td>
                <td>{el.ispaid}</td>
                <td>{el.status}</td>
                <td>{el.group}</td>
                <td>{el.notebook}</td>
                <td>{el.comments}</td>
                <td>
                    <button className='edit-btn' onClick={() => setIsOpenEdit(true)}>Редактировать</button>
                    <button className='del-btn' onClick={() => delData(el.id)}>Удалить</button>
                </td>
            </tr>
    );
};

export default StudentItem;