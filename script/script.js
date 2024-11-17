function newUser() {
  let first_name = document.getElementById("first_name").value;
  let last_name = document.getElementById("last_name").value;
  let cpf = document.getElementById("cpf").value;
  let age = document.getElementById("age").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let user = {
    first_name: first_name,
    last_name: last_name,
    cpf: cpf,
    age: age,
    email: email,
    password: password,
  };

  localStorage.setItem("user", JSON.stringify(user));
  alert("Usuário cadastrado com sucesso!");
}

function login(event) {
  event.preventDefault(); // Previne o envio do formulário

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let user = JSON.parse(localStorage.getItem("user"));
  if (user && user.email === email && user.password === password) {
    alert("Login bem-sucedido!");
    window.location.href = "page/home.html"; // Redireciona para a página desejada
  } else {
    alert("Credenciais inválidas. Tente novamente.");
  }
}
