// Create the tile layer that will be the background of the map
let streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

// Create an object to hold the streetmap layer
let baseMaps = {
    "Street Map": streetmap
};

// Create an object to hold the earthquakes layer
let quakeMaps = {
    "Earthquakes": earthquakes
};

// Create the map object
let map = L.map(  , {
    center: ,
    zoom: ,
    layers: [streetmap, quakeMaps]
});

// Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
L.control.layers(baseMaps, quakeMaps, {
    collapsed: false
}).addTo(map);