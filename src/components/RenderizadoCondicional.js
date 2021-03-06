import React, {Component} from 'react';

function Login() {
    return (
        <div>
            <h3>Login</h3>
        </div>
    );
}

function Logout() {
    return (
        <div>
            <h3>Logout</h3>
        </div>
    );
}

class RenderizadoCondicional extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            session: true,
        }
    }

    render() {
        return (
            <div>
                <h2>Renderiazdo condicional</h2>
                {this.state.session ? <Login/> : <Logout/>}
            </div>
        );
    }
}

export default RenderizadoCondicional;