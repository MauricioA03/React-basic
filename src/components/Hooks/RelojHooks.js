import React, {useEffect, useState} from 'react';

function Reloj({hour}) {
    return <h3>{hour}</h3>;
}

function RelojHooks() {
    const [hour, setHour] = useState(new Date().toLocaleTimeString());
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        let temporizador;

        if (visible) {
            temporizador = setInterval(() => {
                setHour(new Date().toLocaleTimeString());
            }, 1000);
        } else {
            clearInterval(temporizador);
        }
        return () => {
            console.log("fase de desmontaje");
            clearInterval(temporizador);
        };
    }, [visible]);

    return (
        <div>
            <h2>Reloj con Hooks</h2>
            {visible && <Reloj hour={hour}/>}
            <button onClick={() => setVisible(true)}>Iniciar</button>
            <button onClick={() => setVisible(false)}>Detener</button>
        </div>
    );
}

export default RelojHooks;

