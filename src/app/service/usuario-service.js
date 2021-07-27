import ApiService from "../api-service"

class UsuarioService extends ApiService{
    constructor(){
        super('/api/usuarios')
    }

    autenticar(credenciais){
        return this.post('/autenticar', credenciais)
    }

    obterSaldoPorUsuario(idUsuario){
        return this.get(`/${idUsuario}/saldo`)
    }
}

export default UsuarioService