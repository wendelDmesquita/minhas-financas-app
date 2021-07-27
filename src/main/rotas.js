import React from 'react'

import {Route, Switch, HashRouter} from 'react-router-dom'

import CadastroUsuario from '../views/cadastro'
import Home from '../views/home'
import Login from '../views/login'

export default () => {
    return(
        <HashRouter>
            <Switch>
                
                <Route path="/login" component={Login} />
                <Route path="/cadastro-usuario" component={CadastroUsuario} />
                <Route path="/" component={Home} />
            </Switch>
        </HashRouter>
    )
}