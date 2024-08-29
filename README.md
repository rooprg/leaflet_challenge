**EARTHQUAKE LEAFLET CHALLENGE**


**(1) Project Overview and Purpose:**


The United States Geological Survey [USGS] is interested in building a new set of tools that will allow them to visualize their earthquake data. Earthquake data is collected from all over the world each day and there are advantages to displaying it in a meaningful way. The purpose of this exercise is to develop a way to visualize USGS data that will allow for better educating the public and other government organizations (and hopefully secure more funding) on issues facing the planet.


**(2) Dataset Description:**


There were several datasets from which to choose, updated every minute. More information is available here: https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php .

Data for this exercise was from Monthly data package for all earthquakes worldwide.


The dataset was retrieved from the above usgs.gov website in a .geojson format.


The logic.js code could be run at any time to refresh the dataset for a new visualization.


**(3) Data Cleaning and Preprocessing:**


The .geojson data was not cleaned for this exercise, but instead was organized to be presented on a map with layers.


**(4) Data Visualization Techniques:**


The visualization for this exercise is a map with two layers, Street Map and Earthquake.

The map markers are color-coded to indicate the depth of the earthquake, while their diameter represents the magnitude of the earthquake.

The map is interactive. Clicking a map marker provide the magnitude, depth, and coordinates (latitude + longitude) of each earthquake.


**(5) Results and Analysis:**


The tool developed allows for running the logic.js code to pull the current earthquake data (all earthquakes in the past 30 days) and plots them on a Street Map using markers to display visual information (depth and magnitude), while clicking on a marker provides additional details (magnitude, depth, and coordinates [latitude + longitude]).

Here is a .png file demonstrating the map:


![Earthquake Map](/leaflet_part_1/leaflet_part_1_21_jul_2024.png)


**(6) Ethical Considerations:**


(Discuss any ethical considerations taken into account during the project, such as data privacy, bias, or fairness)


**(7) Instructions for Interacting with the Project:**


Leaflet Part 1 Javascript code is in the file titled "logic.js" in the static folder (and uses index.html and style.css provided)

The .html file visualized here: https://rooprg.github.io/leaflet_challenge/ (as well as a png titled "leaflet_part_1_21_jul_2024" in the leaflet_part_1 folder).




**(8) Citations:**

(a) Shades of Yellow. (2023). Retrieved from https://htmlcolorcodes.com/colors/shades-of-yellow/

(b) Question types asked of Xpert Learning Assistant:

     (i) geoJSON format

     (ii) Javascript/Leaflet color options (use of hex code identifiers)

     (iii) Syntax

     (iv) console.log errors

(e) Leaflet legend element comprehension

(f) HTML div, tag, and span code comprehension
