function iniciarSesion() {
  let usuario;
  let password;
  let intentos = 0;
  let acceso = false;
  let usuarioCorrecto = "mbape";
  let passwordCorrecta = "kylian";

  do {
    usuario = prompt("Escriba su usuario:");
    password = prompt("Escriba su contrasena:");

    console.log("Usuario:", usuario);
    console.log("Contrasena:", password);

    if (usuario == "mbape" && password == "kylian") {
      console.log("Acceso permitido");
      alert("Has iniciado sesión ");
      acceso = true;
    } else {
      intentos++;
      console.log("Datos incorrectos");
      alert("Usuario o contrasena incorrectos");
    }
  } while (intentos < 3 && acceso == false);

  if (intentos == 3 && acceso == false) {
    console.log("Usuario bloqueado");
    alert("Muchos intentos fallidos. Bloqueado");
  }
}

iniciarSesion();
