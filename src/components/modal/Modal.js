import React,{Fragment} from 'react'
import styles from './modal.module.css'
import ReactDOM from 'react-dom';
import Controller from '../layout/Controller';

const BackDrop=({closeModal,show}) => <div className={`${styles.backDrop} ${show ? styles.show : null}`} onClick={closeModal}></div>

const Overlay=({closeModal,show}) => <div className={`${styles.overlay} ${show ? styles.showoverlay : null}`}>
<Controller>Hello from Controller Modal</Controller>
    <div>
        <form>
            <label htmlFor='name'>name</label>
            <input type='text' name='name'></input>
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
