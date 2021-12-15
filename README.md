# Real Time Bus Tracker
This real time bus tracker collects live GPS location data on Boston's public bus system using an API from the MBTA. The script asks for the bus locations on the first bus route every 15 seconds and maps the coordinates accordingly using mapbox. After 14 seconds of the markers being displayed on the map, a 1 second removal of the markers shows new data is about to come in. This program demonstrates the use of asynchronous and recurring functions to properly collect, analyze, and display data.

## How to Run?
Once index.html, mapanimation.js, and styles.css are downloaded into a folder, load index.html into a browser. 
Open the console window in developer tools to see the location array being updated every 15 s.

## Roadmap of Future Improvements
I would like this website to be used by an MBTA employee as a control center to watch bus locations, identify areas of little to no movement, and ensure that everything is running according to schedule. To make this project more functional, I would like to incorporate other bus routes onto the map (as well as the ability to filter only one route at a time), notifications when a bus has been removed from a route, as well as alerts when a bus hasn't moved in a predetermined amount of time. With this project I want to give as much information as possible, for it is intended to be used by an expert. To get more bus route's data I would need to programatically pull the correct url based on user input.

## License Information
This project was created as part of the MIT xPRO Full Stack Development program. Mapbox and MBTA APIs were incorporated in this project, as well as a baseline for this project from Dr. Sanchez of MIT. 
