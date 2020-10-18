const options = {
    dragging: false,
    touchZoom: false,
    doubleClick: false,
    scrollWheelZoom: false,
    zoomControl: false
}

const map = L.map('map', options).setView([-23.2228481,-45.9156731], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }
).addTo(map);

//Create Icon:
const icon = L.icon({
    iconUrl: "./assets/map-marker.svg",
    iconSize: [45, 55],
    iconAnchor: [30, 70],
    popupAnchor: [200, 2]
})


L.marker([-23.2228481,-45.9156731], { icon })
    .addTo(map)



/** Image Galery */

function selectImage(event) {
    const button = event.currentTarget

    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }

    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    imageContainer.src = image.src

    button.classList.add("active")
}