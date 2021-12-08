# Real Time Bus Tracker

Description
- This real time bus tracker collects live GPS location data on MBTA's route 1 buses' and maps the coordinates. The location data is refreshed every 15 seconds. After 14 seconds of the markers being displayed on the map, a 1 second removal of the markers show new data is about to come in. This program is meant to be used by someone monitoring the route 1 bus system.

How to Run?
To collect the necessary information, a function is called every 15 seconds to retrieve all the route 1 buses' longitude and latitude data. The GPS locations are then displayed on a map of Boston for 14 seconds. Then the markers will be removed from the map until a new inquiry is made with the MBTA. Opening developer tools in your browser should show the array of data that is collected every 15 seconds. To run the code, make sure all files are downloaded and refresh your browser with the correct html file.

Future Improvements
- I would like this website to be used by an MBTA employee as a control center to watch bus locations, identify areas of little to no movement, and ensure that everything is running according to schedule. To make this project more functional, I would like to incorporate other bus routes onto the map (as well as the ability to filter only one route at a time), notifications when a bus has been removed from a route, as well as alerts when a bus hasn't moved in a predetermined amount of time. With this project I want to give as much information as possible, for it is intended to be used by an expert. 

License Information
- This project was created as part of the MIT xPRO Full Stack Development program. Mapbox and MBTA APIs were incorporated in this project, as well as a baseline for this project from Dr. Sanchez of MIT. 
