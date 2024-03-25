function logar(){

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

        if(login == 'admin' && password == 'admin'){
            alert('Sucesso');
        }else{
            alert('Usuario ou senha incorretos');
        }

    }