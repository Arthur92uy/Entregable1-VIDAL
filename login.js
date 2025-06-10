let fechaDeHoy = "0";
let opcionMenu = "";
const usuariosExistentes = [
    {
        perfil: "Admin", mail: "admin@admin.com", nick: "Admin", nombre: "Administrador", apellido: "Administrador", fechaNac: "04/12/95", contrasena: "Adminadmin",
    },
    {
        perfil: "User", mail: "user@user.com", nick: "User", nombre: "Usuario", apellido: "Usuario", fechaNac: "04/12/95", contrasena: "Useruser",
    }
];
let nickExiste = true;
let cadenaDeTexto = ""
let indiceUsuario = ""
let perfilUsuario = ""

function validarFecha(){
        if (fechaDeHoy.length < 6 || fechaDeHoy.length > 8 || typeof fechaDeHoy == "NaN") {
            alert("La fecha ingresada es incorrecta, utilice el formato \"04/12/95\".");
            fechaDeHoy = "";
        }
}

function menu(){
    opcionMenu = prompt(
        `                    GESTIÓN DE USUARIOS
        \nSeleccione la opcion que desee ejecutar. 
        \nPresione Cancelar si desea cerrar el programa.
        \n1 - Registro de usuario nuevo.
        \n2 - Listar usuarios existentes.
        \n3 - Iniciar sesion en usuario existente.        `);
        // \n4 - Modificar usuario.
        // \n5 - Eliminar usuario.

    return opcionMenu;
}

function buscarUsuario(nick){
    for(let i = 0; i < usuariosExistentes.length; i++){
        if (usuariosExistentes[i].nick == nick){
            nickExiste = true;
            indiceUsuario = i;

            break;
        } else {
            nickExiste = false;
            indiceUsuario = ""
        }
    }
}

function registroUsuarioNuevo(){
    let nickNuevoUsuario = ""
    while (nickExiste === true){
        nickNuevoUsuario = prompt("Ingrese un nuevo NickName:");
        // if (nickNuevoUsuario === null) {
        //     break;
        // }
        buscarUsuario(nickNuevoUsuario);
        if (nickExiste === true){
            alert(`El NickName ${nickNuevoUsuario} esta en uso.`);
        }
    }
        let perfilNuevo = prompt("Ingrese el perfil del usuario (admin o user):");
        let mailNuevo = prompt("Ingrese el mail del usuario con formato \"mail@dominio.com\":");
        let nombreNuevo = prompt("Ingrese el nombre del usuario:");
        let apellidoNuevo = prompt("Ingrese el apellido del usuario:");
        let fechaNuevo = prompt("Ingrese la fecha de nacimiento del usuario con el formato \"04/12/95\":");
        let contrasenaNuevo = prompt("Ingrese la contraseña del usuario:");
        usuariosExistentes.push({perfil: perfilNuevo, mail: mailNuevo, nick: nickNuevoUsuario, nombre: nombreNuevo, apellido: apellidoNuevo, fechaNac: fechaNuevo, contrasena: contrasenaNuevo, })
        alert(`El usuario ${nickNuevoUsuario} ha sido registrado correctamente.`)
        nickValido = true;
}

function listarUsuariosExistentes(){
    for(let i = 0; i < usuariosExistentes.length; i++){
        if (i === 0){
            cadenaDeTexto = `${i + 1} - ` + usuariosExistentes[i].nick
        } else {
            cadenaDeTexto = cadenaDeTexto + `\n${i + 1} - ` + usuariosExistentes[i].nick
        }
    }
}

function iniciarSesion(){
    let nickUsuario = ""
    let contrasenaUsuario =""
    let sesionIniciada = false
    do {
        nickUsuario = prompt("Ingrese su NickName:");
        buscarUsuario(nickUsuario);
        if (nickExiste === false){
            alert(`El NickName ${nickUsuario} no existe.`);
        } else {
            do {
                contrasenaUsuario = prompt("Ingrese su Contraseña:");
                if (contrasenaUsuario == usuariosExistentes[indiceUsuario].contrasena){
                    alert("Se ha iniciado sesion con éxito.");
                    sesionIniciada = true;
                } else if (contrasenaUsuario == "x") {
                    alert(`Ha seleccionado salir. Volvera al menu anterior.`)
                    sesionIniciada = false
                } else {
                    alert(`La combinacion de NickName ${nickUsuario} y contraseña ingresados no es correcta. Si desea volver al menu principal ingrese x en el campo contraseña.`)
                    sesionIniciada = false
                }
            } while (sesionIniciada === false && contrasenaUsuario !== "x");
        }
    } while (nickExiste === false);
}

while (!fechaDeHoy || fechaDeHoy == "0") {
    fechaDeHoy = prompt("Ingrese la fecha de hoy con el formato \"04/12/95\". Presione Cancelar si desea cerrar el programa.");
    validarFecha()
}

alert(`La fecha del dia de hoy es ${fechaDeHoy}.`);

opcionMenu = menu();

while (opcionMenu > 0 && opcionMenu <= 3 && !isNaN(opcionMenu)) {
    switch (parseInt(opcionMenu)) {
        case 1:
            alert(`La opción seleccionada fue: Registro de usuario nuevo.`);
            registroUsuarioNuevo()
            break;
        case 2:
            alert(`La opción seleccionada fue: Listar usuarios existentes.`);
            listarUsuariosExistentes()
            alert(`Estos son los usuarios existentes:\n${cadenaDeTexto}`);
            break;
        case 3:
            alert(`La opción seleccionada fue: Iniciar sesion en usuario existente.`);
            iniciarSesion();
            break;
        case 4:
            alert(`La opción seleccionada fue: Modificar usuario.`);
            break;
        case 5:
            alert(`La opción seleccionada fue: Eliminar usuario.`);
            break;
        default:
            alert(`La opción seleccionada fue: Salir.`);
            break;
    }
    menu();
}