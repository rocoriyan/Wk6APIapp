import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

const AmiiboModal = ({ isOpen, closeModal, amiibo }) => {
    return(
        <div className="modalHolder">
            <ReactModal isOpen={isOpen} onRequestClose={closeModal} className="modal">
                <button className="modalCloser" onClick={closeModal}>CLOSE</button>
                <h2>{amiibo.character}</h2>
                <img src={amiibo.image} className="image"/>
                <div className="infoContainer">
                    <div className="info">
                        <h3>amiibo Series</h3>
                        <p>{amiibo.amiiboSeries}</p>
                    </div>
                    <div className="info">
                        <h3>Game Series</h3>
                        <p>{amiibo.gameSeries}</p>
                    </div>
                    <div className="info list">
                        <h3>Release</h3>
                        <ul>
                            <li>AU: {(amiibo.release).au}</li>
                            <li>EU: {(amiibo.release).eu}</li>
                            <li>JP: {(amiibo.release).jp}</li>
                            <li>NA: {(amiibo.release).na}</li>
                        </ul>
                    </div>
                </div>
            </ReactModal>
        </div>
    )
};

export default AmiiboModal;