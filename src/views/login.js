import React from 'react'

import Card from '../components/card'
import InputField from '../components/input-field'
import {withRouter} from 'react-router-dom'

import UsuarioService from '../app/service/usuario-service'
import LocalStorageService from '../app/service/localStorage-service'

class Login extends React.Component{

    state = {
        emailUsuario : '',
        senhaUsuario : '',
        mensagemErro: ''
    }

    constructor(){
        super();
        this.usuarioService = new UsuarioService();
    }

    entrar = () => {
        this.usuarioService.autenticar({
            emailUsuario: this.state.emailUsuario,
            senhaUsuario: this.state.senhaUsuario
        }).then(response => {
            LocalStorageService.adicionarItem('_usuario_logado', response.data)
            this.props.history.push('/home')
        }).catch(erro => {
            this.setState({mensagemErro: erro.response.data})
        })
        
    }

    prepareCadastrar = () => {
        this.props.history.push('/cadastro-usuario')
    }

    cardAction = [
        <div key={1}>
            <button className="btn waves-effect waves-light" onClick={this.entrar}>Entrar</button>
            <button className="btn-flat red-text text-lighten-2 waves-effect waves-red" onClick={this.prepareCadastrar}>Cadastre-se</button>
        </div>
    ]

    render(){
        return(
            <div className="row">
                <div className="col s6 m6" style={{position: 'relative', left: '250px'}}>
                    <Card cardTitle="Login" cardAction={this.cardAction}>
                        <div className="row">
                            <span>{this.state.mensagemErro.toString()}</span>
                        </div>
                        <div className="row">
                            <InputField labelFor="email" label="Email" colS="12">
                                <input placeholder="Email" type="text" id="email" name="email" className="validate" value={this.state.emailUsuario} onChange={(e) => this.setState({emailUsuario: e.target.value})} />
                            </InputField>
                            <InputField labelFor="senha" label="Senha" colS="12">
                                <input placeholder="Senha" type="password" id="senha" name="senha" className="validate" value={this.state.senhaUsuario} onChange={(e) => this.setState({senhaUsuario: e.target.value})} />
                            </InputField>
                        </div>
                    </Card>
                </div>
            </div>
        );
    }
}

export default withRouter (Login)