import './AppModal.css'

const AppModal = () => {
    return (
    <div className='modal'>
    
    <div className='modal-card'>
        <h1>Twitter</h1>
        <p className='card-description'>Twitter es una red social ampliamente usada por todo tipo de personas, incluyendo tanto artistas como presidentes y otras figuras políticas relevantes.</p>
        <p>+1.500.000.000 Descargas</p>
        <hr/>
        <h2>Eulas</h2>
        <ul>
            <li>"Almacenan datos sobre usted incluso si no interactuó con el servicio"</li>
            <li>"El servicio puede leer tus mensajes privados"</li>
            <li>"El servicio puede eliminar contenido específico sin previo aviso y sin motivo</li>
            <li>"Este servicio puede ver el historial de su navegador</li>
            <li>"Este servicio retiene el contenido que has eliminado</li>
        </ul>
        <hr />
        <h2>Controversias</h2>
        <ul>
            <li>Actualmente, su adquisición por Elon Musk ha causado problemas en cuanto a la privacidad de sus usuarios y trabajadores.</li>
            <li>La plataforma a haceptado sobornos por políticos para eliminar puntos de vistas opositorios.</li>
        </ul>
    </div>

    </div>
    )
}

export default AppModal
