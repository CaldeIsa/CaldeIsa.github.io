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

function openModal(title, description, software, area, videos) {
  // Set the title, description, and area
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-description').textContent = description;
  document.getElementById('modal-area').textContent = area;

  // Clear previous software list and add new items
  const softwareList = document.getElementById('modal-software-list');
  softwareList.innerHTML = ''; // Clear previous content
  software.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      softwareList.appendChild(li);
  });

  // Clear previous gallery and add new videos
  const gallery = document.getElementById('modal-gallery');
  gallery.innerHTML = ''; // Clear previous content

  videos.forEach(videoSrc => {
      const video = document.createElement('video');
      video.controls = true;
      video.muted = true;
      video.playsInline = true;

      const source = document.createElement('source');
      source.src = videoSrc;
      source.type = 'video/mp4';

      video.appendChild(source);
      gallery.appendChild(video);
  });

  // Display the modal
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




// Obtén el modal y los elementos necesarios
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close1")[0];

// Obtener todas las imágenes con la clase "portfolio-img"
const images = document.getElementsByClassName("portfolio-img");

// Añadir evento de clic a todas las imágenes
for (let i = 0; i < images.length; i++) {
    images[i].onclick = function() {
        modal.style.display = "block"; // Mostrar el modal
        modalImg.src = this.src;       // Cambiar la imagen en el modal
        captionText.innerHTML = this.alt; // Mostrar el alt como descripción
    }
}

// Cuando se haga clic en la "X", cerrar el modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}
