const map = L.map('map').setView([-23.2128493, -45.8871961], 11.5);

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

//Create PopUp:
const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240,
}).setContent('Abrigo Municipal Feminino <a href="orphanages.html?id=1" class="choose-orphanage"> <img src="../assets/arrow-white.svg" alt="arrow-white"> </a>')

L.marker([-23.2228481,-45.9156731], { icon })
    .addTo(map)
    .bindPopup(popup)
