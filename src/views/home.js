import React from 'react'
import { withRouter } from 'react-router-dom'

import Card from '../components/card'
import UsuarioService from '../app/service/usuario-service'
import LocalStorageService from '../app/service/localStorage-service'

class Home extends React.Component{

    constructor(){
        super();
        this.usuarioService = new UsuarioService();
    }

    state = {
        saldo: 0.00
    }

    componentDidMount(){
        const usuarioLogadoObj = LocalStorageService.obterItem('_usuario_logado')

        this.usuarioService.obterSaldoPorUsuario(usuarioLogadoObj.idUsuario)
            .then(response => {
                this.setState({saldo: response.data})
            })
    }

    prepareCadastrarUsuario = () => {
        this.props.history.push('/cadastro-usuario')
    }

    cardAction = [
        <div className="row" key={1}>
            <p>E essa é sua área administrativa, utilize um dos menus ou botões abaixo para navegar pelo sistema:</p>
            <button className="btn indigo col s3" onClick={this.prepareCadastrarUsuario}><i className="small material-icons left">account_circle</i>Cadastrar Usuário</button>
            <button className="btn red col offset-s1"><i className="tiny material-icons left">account_balance_wallet</i>Cadastrar Lançamento</button>
            
        </div>
    ]

    render(){
        return(
            <div className="row">
                <div className="col s8 m12" style={{position: 'relative', left: '15px', verticalAlign: '45%'}}>
                    <Card cardTitle="Bem vindo!" textColor="white-text" cardColor="blue-grey" cardVar="darken-1" cardAction={this.cardAction}>
                        <p>Esse é seu sistema de finanças.</p>
                        <p>Seu saldo para o mês atual é de R$ {this.state.saldo}</p>
                    </Card>  
                </div>
            </div>
        )
    }
}

export default withRouter (Home)