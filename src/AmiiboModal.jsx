import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

const AmiiboModal = ({ isOpen, closeModal, amiibo }) => {
    return(
        <div className="modalHolder">
            <ReactModal isOpen={isOpen} onRequestClose={closeModal} className="modal">
                <button className="modalCloser" onClick={closeModal}>CLOSE</button>
                <h2>{amiibo.character}</h2>
                <div className="infoContainer">
                    <img src={amiibo.image} className="infoSect image"/>
                    <div className="infoSect info">
                        <h3>amiibo Series</h3>
                        <p>{amiibo.amiiboSeries}</p>
                    </div>
                    <div className="infoSect info">
                        <h3>Game Series</h3>
                        <p>{amiibo.gameSeries}</p>
                    </div>
                    <div className="infoSect info list">
                        <h3>Release</h3>
                        {/*<p>AU: {amiibo.release.au}</p>
                        <p>EU: {amiibo.release.eu}</p>
                        <p>JP: {amiibo.release.jp}</p>
                        <p>NA: {amiibo.release.na}</p>*/}
                    </div>
                </div>
            </ReactModal>
        </div>
    )
};

export default AmiiboModal;