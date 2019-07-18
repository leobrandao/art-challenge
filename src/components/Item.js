import React from 'react';

const Item = ({ item, showLeftArrow, showRightArrow, onPrevious, onNext }) => (
    <li>
        { showLeftArrow && <span className='arrow--left' onClick={onPrevious}>&lt;</span> }
        { item }
        { showRightArrow && <span className='arrow--right' onClick={onNext}>&gt;</span> }
    </li>
)

export default Item;