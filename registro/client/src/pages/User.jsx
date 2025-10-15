const User = () => {
    const savedData = JSON.parse(sessionStorage.getItem('registrationData') || '{}'); 

    const creationDate = new Date(savedData.creationDate);
    const now = new Date();

    const diffMs = now - creationDate; // diferencia en milisegundos
    const diffSeconds = Math.floor(diffMs / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);

    const seconds = diffSeconds % 60;
    const minutes = diffMinutes % 60;
    const hours = diffHours % 24;
    const days = diffDays;
    
    return (
        <>
            {Object.keys(savedData).length > 0 && 
                <div style={{ border: '1px solid #ddd', padding: '20px', marginBottom: '20px' }}> 
                    <h3>Información Personal</h3> 
                    <p><strong>Nombre:</strong> {savedData.firstName} {savedData.lastName}</p> 
                    <p><strong>Fecha de Nacimiento:</strong> {savedData.dateOfBirth}</p> 
                    <p><strong>Género:</strong> {savedData.gender}</p> 
                    
                    <h3>Información de Contacto</h3> 
                    <p><strong>Email:</strong> {savedData.email}</p> 
                    <p><strong>Teléfono:</strong> {savedData.phone}</p> 
                    <p><strong>Dirección:</strong> {savedData.address}</p> 
                    <p><strong>Ciudad:</strong> {savedData.city}</p> 
                    <p><strong>Edad de la cuenta:</strong> {`${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos`}</p> 
                </div>}
        </>
    )
}

export default User