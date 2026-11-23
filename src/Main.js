let rolUsuario = prompt("Ingrese su rol de usuario: ADMIN, CREADOR, ESPECTADOR");
let pagoAlDia = false;

switch (rolUsuario) {
    case "ADMIN":
        console.log("Acceso total a configuración del sistema");
        break;

    case "CREADOR":
        pagoAlDia = prompt("¿Su suscripción está al día? (true/false)") === "true";

        if (pagoAlDia) {
            console.log("Acciones de edición habilitadas");
        } else {
            console.log("Cuenta suspendida, por favor renueve su suscripción para continuar");
        }
        break;

    case "ESPECTADOR":
        console.log("Modo solo lectura activo");
        break;

    default:
        console.log("Usuario no registrado, por favor regístrese para continuar");
}