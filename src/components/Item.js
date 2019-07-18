import React from 'react';

const Item = (props) => {
    const { moveItem, item, columnName, prevColumn, nextColumn } = props;
    return (
        <li>
            <span className='arrow--left' onClick={ () => moveItem(item, columnName, prevColumn)}>&lt; </span>
            {item}
            <span className='arrow--right' onClick={ () => moveItem(item, columnName, nextColumn)}> &gt;</span>
        </li>
    )
}

export default Item;