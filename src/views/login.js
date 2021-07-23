import React from 'react'

import Card from '../components/card'

import InputField from '../components/input-field'

class Login extends React.Component{

    state = {
        email : '',
        senha : ''
    }

    entrar = () => {
        console.log(`Este é seu email, cabra: ${this.state.email}`)
        console.log(`Esta é sua senha, cabra: ${this.state.senha}`)
    }

    cardAction = [
        <div key={1}>
            <button className="btn waves-effect waves-light" onClick={this.entrar}>Entrar</button>
            <button className="btn-flat red-text text-lighten-2 waves-effect waves-red">Cadastre-se</button>
        </div>
    ]

    render(){
        return(
            <div className="row">
                <div className="col s6 m6" style={{position: 'relative', left: '250px'}}>
                    <Card cardTitle="Login" cardAction={this.cardAction}>
                        <div className="row">
                            <InputField labelFor="email" label="Email">
                                <input placeholder="Email" type="text" id="email" name="email" className="validate" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} />
                            </InputField>
                            <InputField labelFor="senha" label="Senha">
                                <input placeholder="Senha" type="password" id="senha" name="senha" className="validate" value={this.state.senha} onChange={(e) => this.setState({senha: e.target.value})} />
                            </InputField>
                        </div>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Login