import React from 'react'

import Card from '../components/card'
import InputField from '../components/input-field'
import {withRouter} from 'react-router-dom'

class CadastroUsuario extends React.Component{

    state = {
        nomeUsuario: '',
        emailUsuario: '',
        senhaUsuario: '',
        senhaRepeticao: '',
    }

    cadastrar = () => {
        console.log(this.state)
    }

    cancelar = () => {
        this.props.history.push('/login')
    }

    cardAction = [
        <div className="row" key={1}>
            <button className="btn indigo lighten-1 waves-effect waves-lime col s3" onClick={this.cadastrar}>Cadastrar</button>
            <button className="btn-flat red-text text-darken-3 waves-effect col s3 offset-s1" onClick={this.cancelar}>Cancelar</button>
        </div>
    ]
    render(){
        return(
            <div className="row">
                <div className="col s6 m8" style={{position: 'relative', left: '190px'}}>
                    <Card cardTitle="Cadastro de Usuário" cardAction={this.cardAction}>
                        <div className="row">
                            <InputField labelFor="nome" label="Nome" colS="6">
                                <input placeholder="Nome" type="text" id="nome" name="nome" className="validate" onChange={(e) => this.setState({nomeUsuario: e.target.value})} />
                            </InputField>
                            <InputField labelFor="email" label="Email" colS="6">
                                <input placeholder="Email" type="text" id="email" name="email" className="validate" onChange={(e) => this.setState({emailUsuario: e.target.value})} />
                            </InputField>
                            <InputField labelFor="senha" label="Senha" colS="6">
                                <input placeholder="Senha" type="password" id="senha" name="senha" className="validate" onChange={(e) => this.setState({senhaUsuario: e.target.value})} />
                            </InputField>
                            <InputField labelFor="senhaConf" label="Repita a senha" colS="6">
                                <input placeholder="Senha" type="password" id="senhaConf" name="senhaConf" className="validate" onChange={(e) => this.setState({senhaRepeticao: e.target.value})} />
                            </InputField>
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}

export default withRouter (CadastroUsuario)