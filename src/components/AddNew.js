import React from 'react'

const AddNew = (props) => {
    const columnName = props.columnName;
    return (
        <button className='add-new-item' onClick={() => props.addNewItem(columnName)}>Add New Item</button>
    )
}

export default AddNew;