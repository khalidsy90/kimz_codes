import React,{Fragment} from 'react'
import styles from './modal.module.css'
import ReactDOM from 'react-dom';

const BackDrop=({closeModal,show}) => <div className={`${styles.backDrop} ${show ? styles.show : null}`} onClick={closeModal}></div>

const Overlay=({children,closeModal,show}) => {
return (
<div className={`${styles.overlay} ${show ? styles.showoverlay : null}`}>
    {children}
</div>
)
}

const Modal = ({children,show,hideModal}) => {
    return (
    show && <Fragment >
        {ReactDOM.createPortal(
            <Fragment>
                <BackDrop closeModal={hideModal} show={show} />
                <Overlay show={show}>{children}</Overlay>
            </Fragment>
        ,document.getElementById('modal'))}
        </Fragment>
    )
}

export default Modal
