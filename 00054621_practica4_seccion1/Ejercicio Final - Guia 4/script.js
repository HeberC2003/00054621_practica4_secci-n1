function recordarActividad() {
  const dia = document.getElementById("dia").value.trim().toLowerCase();
  let mensaje = "";

  switch (dia) {
    case "lunes":
      mensaje = "Hoy debes atender un cliente específico.";
      break;
    case "martes":
      mensaje = "Hoy visitas una agencia fuera de la ciudad.";
      break;
    case "miércoles":
    case "miercoles":
      mensaje = "Hoy llevas a tu hija al ballet.";
      break;
    case "jueves":
      mensaje = "Hoy debes priorizar entregas de desarrollo.";
      break;
    case "viernes":
      mensaje = "Hoy debes atender problemas de manera remota.";
      break;
    case "sábado":
    case "sabado":
      mensaje = "Hoy haces lo que tu esposa quiera 😅.";
      break;
    default:
      mensaje = "Ese no es un día válido, intenta de nuevo.";
  }

  alert(mensaje);
}
