import { useState } from 'react'
import './AppModal.css'

const AppModal = ({modalData, onCloseModal}) => {
    return (
    <div className='modal' onClick={() => onCloseModal()}>
    <div className='modal-card'>

        <h1>{modalData.appName}</h1>
        <p className='card-description'>{modalData.appDescription}</p>
        <p>{modalData.appDownloads} Descargas</p>

        <hr/>
        <h2>Eulas</h2>
        <ul>
            {
                modalData.appEula.map(
                    eula => (
                    <li>{eula}</li>
                    )
                )
            }
        </ul>

        {/* <hr />
        <h2>Controversias</h2>
        <ul>
        {
            modalData.appEula.map(
                eula => (
                <li>{eula}</li>
                )
            )
        }
        </ul> */}

    </div>
    </div>
    )
}

export default AppModal
