import React,{useContext} from 'react';
import Modal from '../UI/Modal'
import { MainContest } from '../store/Context';

export default function YouTube() {
    const Ctx = useContext(MainContest);

    return(
        <Modal onClose={() => Ctx.setYouTubeOpen(false)}>
            <div className="video">
                <div className="video-item">
                    <iframe title="video1" src="https://www.youtube.com/embed/hczyHMo8mPA" frameborder="0" scrolling="no" allowTransparency="true"  />
                </div>
                <div  className="video-item">
                    <iframe title="video2" src="https://www.youtube.com/embed/ibC8d9vPZbc" frameborder="0" scrolling="no" allowTransparency="true" />
                </div>
                <div className="video-item">
                    <iframe title="video3" src="https://www.youtube.com/embed/EV6qeD1O7y0" frameborder="0" scrolling="no" allowTransparency="true" />
                </div>
            </div>
        </Modal>
    )
}

