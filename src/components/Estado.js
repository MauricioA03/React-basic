import React, {Component} from 'react';

function EstadoAHijo(props) {
    return (
        <div>
            <h3>{props.contadorHijo}</h3>
        </div>
    );
}

class Estado extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            contador: 0,
        };

        setInterval(() => {
            this.setState({
                contador: this.state.contador + 1
            });
        }, 1000);
    }

    render() {
        return (
            <div>
                <h2>El estado</h2>
                <p>{this.state.contador}</p>
                <EstadoAHijo contadorHijo={this.state.contador}/>
            </div>
        );
    }
}

export default Estado;