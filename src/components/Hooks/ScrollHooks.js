import React, {useEffect, useState} from 'react';

function ScrollHooks() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        console.log("Moviendo el Scroll");
        const detectarScroll = () => setScrollY(window.pageYOffset);
        window.addEventListener("scroll", detectarScroll);
        return () => window.removeEventListener("scroll", detectarScroll);// termina la ejecicion de usestate
    }, [scrollY]);//solo caundo la variable tenga cambios

    useEffect(() => {
        console.log("fase de Montaje");
    }, []);// fase de montaje solo inicia una vez

    useEffect(() => {
        console.log("fase de Actualizacion");
    });//cada que haya un cambio

    useEffect(() => {
        return () => {
            console.log("fase de Desmontaje");

        };
    });//cada que haya un cambio

    return (
        <div>
            <h2>Hooks - useEffect y el Ciclo de Vida</h2>
            <p>Scroll Y del navegador {scrollY}px</p>
        </div>
    );
}

export default ScrollHooks;