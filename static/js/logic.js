function createMap(earthquakes) {

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
        zoom: 5,
        layers: [streetMap, earthquakes]
    });
    
    // Create a layer control, and pass in baseMaps and overlayMaps. Add the layer control to the map.
    L.control.layers(baseMaps, quakeMaps, {
        collapsed: false
    }).addTo(map);
    }
    
// Create a function for the earthquakes
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
            if (depth < 10) return "#92BF50";
            else if (depth < 30) return "#FFFAA0";
            else if (depth < 50) return "#FAFA33";
            else if (depth < 70) return "#FFFF00";
            else if (depth < 90) return "#FFC000";
            else return "#FF0000";
        }

        // For each event, create a circle marker, plus bind a popup with name
        let quakeCircle = L.circleMarker([coordinates[1], coordinates[0]], {
            fillOpacity: 0.75,
            color: "black",
            fillColor: markerColor(depth),
            radius: Math.sqrt(feature.properties.mag) * 10
        }).bindPopup(`<h3>Magnitude: ${feature.properties.mag}</h3><h3>Depth: ${depth}</h3><h3>Latitude: ${coordinates[1]}</h3><h3>Longitude: ${coordinates[0]}</h3>`);

        // Add markers to quakeMarkers array
        quakeCircles.push(quakeCircle);
    });

    // Create a layer group that's made from the new array, and pass it to the createMap function.
    createMap(L.layerGroup(quakeCircles));
}

// Perform an API call to the API to get the earthquake information. Call createCircles when it completes.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson").then(createCircles);
