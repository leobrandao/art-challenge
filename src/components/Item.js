import React from 'react';

const Item = (props) => {
    const {item, moveItem, columnName} = props;
    return (
        <li>
            <span className='arrow--left' onClick={ () => moveItem(item, columnName, -1)}>&lt; </span>
            {item}
            <span className='arrow--right' onClick={ () => moveItem(item, columnName, 1)}> &gt;</span>
        </li>
    )
}

export default Item;