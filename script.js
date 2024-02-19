document.querySelector('.navbar-icon').addEventListener('click', function() {
    document.querySelector('.navbar-menu').classList.toggle('active');
  });
// Asignar la función de descarga al evento click del botón
document.getElementById("btnDescargar").addEventListener("click", descargarDocumento);
function enviarCorreo() {
    // Dirección de correo electrónico a la que se enviará el correo
    var destinatario = "isaac.calderon.navarro@outlook.com";

    // Asunto y cuerpo del correo electrónico (pueden modificarse según sea necesario)
    var asunto = "Asunto del correo";
    var cuerpo = "Contenido del correo electrónico";

    // Crear el enlace de correo electrónico
    var mailtoLink = "mailto:" + destinatario + "?subject=" + encodeURIComponent(asunto) + "&body=" + encodeURIComponent(cuerpo);

    // Abrir el enlace de correo electrónico en una nueva ventana o pestaña
    window.open(mailtoLink);
}
// Función para abrir el pop-up
function openPopup() {
    document.getElementById("popup").style.display = "block";
}

// Función para cerrar el pop-up
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Función que muestra u oculta el botón dependiendo de la posición del scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// Función que lleva al usuario al inicio de la página cuando se hace clic en el botón
function topFunction() {
  document.body.scrollTop = 0; // Para navegadores que no son Safari
  document.documentElement.scrollTop = 0; // Para Safari
}

