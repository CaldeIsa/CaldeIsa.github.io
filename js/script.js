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

function openModal(title, description, software,area) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-description').textContent = description;
  document.getElementById('modal-area').textContent = area;

  // Clear previous software list and add new items
  const softwareList = document.getElementById('modal-software-list');
  softwareList.innerHTML = '';
  software.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    softwareList.appendChild(li);
  });

  document.getElementById('projectModal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('projectModal').style.display = 'none';
}

window.onclick = function(event) {
  var modal = document.getElementById('projectModal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}


// Función para obtener el nombre del mes en español
function getMonthName(monthNumber) {
    const months = [
        'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
        'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
    ];
    return months[monthNumber];
}

// Función para agregar un cero delante de los números menores a 10
function addLeadingZero(number) {
    return number < 10 ? '0' + number : number;
}

// Función para actualizar la fecha y la hora
function updateDateTime() {
    const now = new Date();

    // Obtener el día, mes, año, horas, minutos y segundos
    const day = now.getDate();
    const month = getMonthName(now.getMonth());
    const year = now.getFullYear();
    const hours = addLeadingZero(now.getHours());
    const minutes = addLeadingZero(now.getMinutes());
    const seconds = addLeadingZero(now.getSeconds());

    // Formatear la fecha y la hora
    const formattedDate = `${day} de ${month} del ${year}`;
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    // Mostrar la fecha y la hora en el HTML
    document.getElementById('dateTimeDisplay').textContent = `${formattedDate} ${formattedTime}`;
}

// Actualizar la fecha y la hora inmediatamente y cada segundo
setInterval(updateDateTime, 1000);

// Llamar a la función para que muestre la fecha y hora al cargar la página
updateDateTime();
