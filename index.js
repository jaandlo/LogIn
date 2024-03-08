function login() {
    const usuarioIN = document.getElementById('usuario').value; //Asignamos en la variable usuarioIN el texto que la persona escriba en el input (campo) de ID="usuario"
    const passIn = document.getElementById('pass').value //Asignamos en la variable passIN el texto que la persona escriba en el input (campo) de ID="pass"

    if (usuarioIN === '') {
        window.alert("Ingrese un usuario")
    }
    if (passIn === '') {
        window.alert("Ingrese una contraseña")
    }
}