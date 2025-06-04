let fechaDeHoy = "";

function validarFecha(){
        if (fechaDeHoy.length < 6 || fechaDeHoy.length > 8 || typeof fechaDeHoy == "NaN") {
            alert("La fecha ingresada es incorrecta, utilice el formato \"04/12/95\".");
            fechaDeHoy = "";
        }
    }

while (!fechaDeHoy) {
    fechaDeHoy = prompt("Ingrese la fecha de hoy con el formato \"04/12/1995\": ");
    validarFecha()
}

console.log(`La fecha del dia de hoy es ${fechaDeHoy}.`);

function menu(opcionMenu){
    console.log("                    +++++++++++++++++++++++++++++")
    console.log("                    +    GESTIÓN DE USUARIOS    +");
    console.log("                    +++++++++++++++++++++++++++++")
    console.log("");
    console.log("1 - Registro de usuario nuevo.");
    console.log("5 - Listar usuarios existentes.");
    console.log("2 - Iniciar sesion en usuario existente.");
    console.log("3 - Modificar usuario.");
    console.log("4 - Eliminar usuario.");
    opcionMenu = prompt("Seleccione la opcion que desee ejecutar: ");
    console.log("");
    console.log(`    La opcion elegida fue: ${opcionMenu}.`);
}

menu()


