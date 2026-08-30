const usuarioCorrecto = "admin";
const passwordCorrecto = "1234";

let intentos = 0;
const maxIntentos = 3;

function iniciarSesion(usuario, password) {
  if (usuario === usuarioCorrecto && password === passwordCorrecto) {
    return true;
  } else {
    return false;
  }
}

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;
    const mensaje = document.getElementById("mensaje");

    intentos++;

    if (iniciarSesion(usuario, password)) {
      mensaje.textContent = "✅ Acceso concedido. Bienvenido!";
      mensaje.style.color = "green";
    } else {
      if (intentos >= maxIntentos) {
        mensaje.textContent = "⛔ Usuario bloqueado por exceso de intentos.";
        mensaje.style.color = "red";
        document.getElementById("loginForm").querySelector("button").disabled =
          true;
      } else {
        mensaje.textContent = `❌ Credenciales incorrectas. Intento ${intentos} de ${maxIntentos}`;
        mensaje.style.color = "red";
      }
    }
  });
