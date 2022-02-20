import React, {Component} from 'react';

export class EventosES6 extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            contador: 0,
        };

        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
    }

    sumar(e) {
        console.log("sumando");
        console.log(this);
        this.setState({
            contador: this.state.contador + 1,
        })
    }

    restar(e) {
        console.log("restar");
        console.log(this);
        this.setState({
            contador: this.state.contador - 1,
        })
    }

    render() {
        return (
            <div>
                <h2>Eventos en Componentes de clase en ES6</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        );
    }
}

//Properties Initializar
export class EventosES7 extends Component {
    state = {
        contador: 0,
    };
    //Arrow funtion
    sumar = (e) => {
        console.log("sumando");
        console.log(this);
        this.setState({
            contador: this.state.contador + 1,
        })
    }

    restar = (e) => {
        console.log("restar");
        console.log(this);
        this.setState({
            contador: this.state.contador - 1,
        })
    }

    render() {
        return (
            <div>
                <h2>Eventos en Componentes de clase ES7</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        );
    }
}

