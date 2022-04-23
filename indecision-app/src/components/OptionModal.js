import React from 'react';
import Modal from 'react-modal';

const OptionModal = props => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOption}
        contentLabel="Selected Option"
    >
        <h3>Selected Option</h3>
        <p>{props.selectedOption}</p>
        <button className="button"
                onClick={props.handleClearSelectedOption}
        >
            Okay
        </button>
    </Modal>);

export default OptionModal;