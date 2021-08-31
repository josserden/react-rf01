import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
    state = {};

    render() {
        return createPortal(
            <div className="Overlay">
                <div className="Modal">{this.props.children}</div>
            </div>,
            modalRoot,
        );
    }
}

export default Modal;
