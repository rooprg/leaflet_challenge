// Create the tile layer that will be the background of the map
let streetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

// Create an object to hold the streetmap layer
let baseMaps = {
    "Street Map": streetMap
};

// Create an object to hold the earthquakes layer
let quakeMaps = {
    "Earthquakes": earthquakes
};

// Create the map object
let map = L.map("map", {
    center: [44.58, -103.46],
    zoom: 10,
    layers: [streetMap, quakeMaps]
});

// Create a layer control, and pass in baseMaps and overlayMaps. Add the layer control to the map.
L.control.layers(baseMaps, quakeMaps, {
    collapsed: false
}).addTo(map);

// Create a function for the markers
function createMarkers(response) {

// Retrieve "place" property from response.data
let places = response.features.properties.place;

// Initialize an array to hold earthquakes
let quakeMarkers = []

// Loop through JSON
for (let i = 0; i < response.length; i++)
    let event = place[i];

    // For each event, create a marker, plus bind a popup with name
}







// Create a function to determine the marker color based on earthquake depth
function markerColor(depth) {
    if (depth < 10) return "green";
    else if (depth < 30) return "lightyellow";
    else if (depth < 50) return "yellow";
    else if (depth < 70) return "orange";
    else if (depth < 90) return "red";
    else return "pink";
}

  // Add circles to the map.
  L.circle(, {
    fillOpacity: 0.75,
    color: "white",
    fillColor: markerColor(features.geometry.coordinates[]),
    // Adjust the radius.
    radius: Math.sqrt() * 500
  }).bindPopup(`<h1>${}</h1> <hr> <h3>Earthquake: ${}</h3>`).addTo(myMap);
}




// Set up the legend.
let legend = L.control({ position: "bottomright" });
legend.onAdd = function() {}