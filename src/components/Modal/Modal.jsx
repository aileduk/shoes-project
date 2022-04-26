import React from 'react';
import { ModalWrapper, ModalContent } from './styled';

const Modal = ({ modalActive, setModalActive, image }) => {
    return (
        <ModalWrapper active={modalActive} onClick={() => setModalActive(false)}>
            <ModalContent onClick={e => e.stopPropagation()}>
                <img src={image} alt="img" />
            </ModalContent>
        </ModalWrapper>
    )
}

export default Modal