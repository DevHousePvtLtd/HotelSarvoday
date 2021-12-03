import React, { useContext } from 'react';

import Modal from './Modal'
import { MainContest } from '../store/Context';
import ModalCarousel from '../carousel/ModalCarousel';
export default function Gallery() {
    const Ctx = useContext(MainContest)
    return(
        <>
            <Modal   onClose={()=>Ctx.setIsModalVisible(false)}>
                <ModalCarousel />
            </Modal>
            
        </>
    )
    
}

