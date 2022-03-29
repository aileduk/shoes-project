import React from 'react';
import './modal.css';

const Modal = ({ active, setActive, image }) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className='modal__content' onClick={e => e.stopPropagation()}>
                <img src={image} alt="img" />
            </div>
        </div>
    )
}

export default Modal