// Create a function for the markers
function createCircles(response) {
    let features = response.features;
    
    // Initialize an array to hold earthquakes
    let quakeCircles = [];

    features.forEach(feature => {
        let id = feature.id;
        let geometry = feature.geometry;
        let coordinates = geometry.coordinates;
        let depth = coordinates[2];
        
        function markerColor(depth) {
            if (depth < 10) return "green";
            else if (depth < 30) return "lightyellow";
            else if (depth < 50) return "yellow";
            else if (depth < 70) return "orange";
            else if (depth < 90) return "red";
            else return "pink";
        }

        // For each event, create a circle marker, plus bind a popup with name
        let quakeCircle = L.circleMarker([coordinates[1], coordinates[0]], {
            fillOpacity: 0.75,
            color: "white",
            fillColor: markerColor(depth),
            radius: Math.sqrt(feature.properties.mag) * 500
        }).bindPopup(`<h3>${id}</h3><h3>Coordinates: ${coordinates}</h3>`);

        // Add markers to quakeMarkers array
        quakeCircles.push(quakeCircle);
    });

    // Create a layer group that's made from the new array, and pass it to the createMap function.
    createMap(L.layerGroup(quakeCircles));

// Perform an API call to theAPI to get the station information. Call createCircles when it completes.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(createCircles);


function createMap(earthQuakes) {

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
    zoom: 3,
    layers: [streetMap, quakeMaps]
});

// Create a layer control, and pass in baseMaps and overlayMaps. Add the layer control to the map.
L.control.layers(baseMaps, quakeMaps, {
    collapsed: false
}).addTo(map);
}

// Set up the legend.
//et legend = L.control({ position: "bottomright" });
//legend.onAdd = function() {}