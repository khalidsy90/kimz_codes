import React,{Fragment} from 'react'
import styles from './modal.module.css'
import ReactDOM from 'react-dom';


const BackDrop=({closeModal,show}) => <div className={`${styles.backDrop} ${show ? styles.show : null}`} onClick={closeModal}></div>

const Overlay=({closeModal,show}) => <div className={`${styles.overlay} ${show ? styles.showoverlay : null}`}>
    <div>
        <form>
            <label htmlFor='name'></label>
            <input type='text' name=''></input>
        </form>
    </div>
</div>

const Modal = ({show,hideModal}) => {
    return (
    show && <Fragment >
        {ReactDOM.createPortal(
            <Fragment>
                <BackDrop closeModal={hideModal} show={show} />
                <Overlay show={show}/>
            </Fragment>
        ,document.getElementById('modal'))}
        </Fragment>
    )
}

export default Modal
