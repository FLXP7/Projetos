function autenticar() {
    const login = document.getElementById('usuario').value;
    /*esta linha faz com que o objeto document html seja capturado por meio do elemento id que colocamos no input do formulário.
    Este valor será adicionado na variável do tipo const chamada login. */
    const senha = document.getElementById('senha').value;

    //Agora vamos fazer a validação dos dados 

    if (login === "usuario" && senha === "1234") {
        document.getElementById('mensagem').innerHTML="Usuário autenticado com sucesso!";
    } else {
        document.getElementById('mensagem').innerHTML="PÁ! Acesso Negado. Usuário ou senha incorretos!";
    }
}