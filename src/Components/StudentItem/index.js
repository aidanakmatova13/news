import React from 'react';

const StudentItem = ({el, idx, delData}) => {
    return (
            <tr>
                <th scope="row">{idx+1}</th>
                <td>{el.name}</td>
                <td>{el.phone}</td>
                <td>{el.contract}</td>
                <td>
                    <button className='edit-btn'>Редактировать</button>
                    <button className='del-btn' onClick={() => delData(el.id)}>Удалить</button>
                </td>
            </tr>
    );
};

export default StudentItem;