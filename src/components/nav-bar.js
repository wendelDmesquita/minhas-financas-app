import React from 'react'

export default () => {
    return(
        <nav>
            <div className="nav-wrapper indigo">
                <a href="#" className="brand-logo">Minhas Finanças</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#/">Home</a></li>
                    <li><a href="#/cadastro-usuario">Usuários</a></li>
                    <li><a href="#">Lançamentos</a></li>
                    <li><a href="#/login">Login</a></li>
                </ul>
            </div>
        </nav>
    )
}