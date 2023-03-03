import React, { ReactNode } from 'react'
import './modal.css'

interface ModalType {
        children?: ReactNode;
        isOpen: boolean;
        toggle: () => void;
}


export default function Modal(props: ModalType) {
        return (
                <>
                {props.isOpen && (
                        <div className="modal-overlay" onClick={props.toggle}>
                                <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                                        {/* <div><button onClick={props.toggle}>close</button></div> */}
                                        {props.children}

                                </div>
                        </div>
                )}
                </>
        );
}