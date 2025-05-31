var username;
var password;

function signup() {
  username = prompt("Insira seu nome de usuário:");
  let password1 = prompt("Insira sua senha:");
  let password2 = prompt("Confirme sua senha:");

  if (password1 !== password2) {
    alert("As senhas não coincidem. Tente novamente.");
    return;
  }

  if (username && password1) {
    password = password1;
    alert("Cadastro realizado com sucesso!");
    return;
  }
  alert("Por favor, preencha todos os campos.");
}

document.getElementById("signup").addEventListener("click", signup);

function login() {
  let inputUsername = prompt("Insira seu nome de usuário:");
  let inputPassword = prompt("Insira sua senha:");

  if (inputUsername === username && inputPassword === password) {
    alert("Login realizado com sucesso!");
  } else {
    alert("Nome de usuário ou senha incorretos.");
  }
}

document.getElementById("login").addEventListener("click", login);
