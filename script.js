function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == 'admin' && senha == 'admin'){
        location.href = "home.html"
        alert('Sucesso');

    }else{
        alert('Usuário ou senha incorretos');
    }

}


