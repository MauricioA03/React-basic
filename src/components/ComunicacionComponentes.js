import React, {Component} from 'react';

export default class DadComponent extends Component {
    state = {
        contador: 0
    };

    incrementarContador = (e) => {
        this.setState({
            contador: this.state.contador + 1,
        })
    }

    render() {
        return (
            <div>
                <h2>Comunicacion entre componentes</h2>
                <p>Contador <b>{this.state.contador}</b></p>
                <Son incrementarContador={this.incrementarContador}
                     mensaje={"mensaje para le hijo 1"}
                />
                <Son incrementarContador={this.incrementarContador}
                     mensaje={"mensaje para le hijo 2"}
                />
            </div>
        );
    }
}

function Son(props) {
    return (
        <>
            <h3>{props.mensaje}</h3>
            <button onClick={props.incrementarContador}> +</button>
        </>
    )
}