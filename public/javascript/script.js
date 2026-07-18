// Example starter JavaScript for disabling form submissions if there are invalid fields
// Form validation js Bootstrap Code

(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})();









const mapDiv = document.getElementById("map");

const lat = Number(mapDiv.dataset.lat);
const lng = Number(mapDiv.dataset.lng);
const title = mapDiv.dataset.title;

const map = L.map("map").setView([lat, lng], 15);

L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
    {
        attribution: "&copy; OpenStreetMap contributors"
    }
).addTo(map);
L.marker([lat, lng])
.addTo(map)
.bindPopup(`
    <div style="text-align:center;">
        <h6>${title}</h6>
        <p>📍 Amazing Stay</p>
      
    </div>
`)
.openPopup();