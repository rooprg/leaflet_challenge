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


The data used for this exercise is available on a publically available source, the usgs.com website. There seems to be no sensitive in this dataset that would require constraints on its use.



**(7) Instructions for Interacting with the Project:**

(a) Within the **static** folder, several important files are stored in various folders:

     (i) Javascript code is in the file titled "logic.js" in the **static** folder (and uses index.html and style.css provided).


     (ii) The css information is in the file titled "style.css" in the **css** folder.


(b) The "index.html" file is stored in the main folder.  It can be visualized here: https://rooprg.github.io/leaflet_challenge/ (as well as a png titled "leaflet_part_1_21_jul_2024" in the **leaflet_part_1** folder).


(c) The **leaflet_part_2** folder is empty.


(d) Photos used to describe the exercise and its output are stored in the **Images** folder. These are not considered part of the exercise.


**(8) Citations:**

(a) Shades of Yellow. (2023). Retrieved from https://htmlcolorcodes.com/colors/shades-of-yellow/

(b) Question types asked of Xpert Learning Assistant:

     (i) geoJSON format

     (ii) Javascript/Leaflet color options (use of hex code identifiers)

     (iii) Syntax

     (iv) console.log errors

(e) Leaflet legend element comprehension

(f) HTML div, tag, and span code comprehension
