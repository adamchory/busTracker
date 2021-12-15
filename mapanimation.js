 // This project will map all the active bus stops on the first bus route in Boston for the MBTA

// access token for mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiYWRhbWNob3J5IiwiYSI6ImNrd3dqdXBmeTA0ZmkycXF0cGttYWQwanUifQ.d_Iy_GNoKw8IR042_lN7xw';
  
// Where I want to initialize my map. Properties from mapbox
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-71.104081, 42.365554],
  zoom: 12,
});

// "getBusLocations" pulls live information from the MBTA regarding their first bus route
async function getBusLocations(){
  const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip'
  const response = await fetch(url);
  const json = await response.json();
  return json.data;
}

// "run" pulls data from the function "getBusLocations" every 15 seconds and displays the active locations with markers
async function run(){
  const locations = await getBusLocations();
  console.log(new Date());                          // debugging
  console.log(locations);                           // debugging
  //console.log(locations[1].attributes.longitude);   // debugging
  //console.log(locations[1].attributes.latitude);    // debugging
  
      //for each vehicle
      locations.forEach((vehicle) => {

        //make a popup with a bus label at each location on the map
        const popup = new mapboxgl.Popup({closeButton: true})
          .setLngLat([vehicle.attributes.longitude, vehicle.attributes.latitude])
          .setHTML(`Bus ${vehicle.attributes.label}`);
        
           //make a marker at each location on the map
        const marker = new mapboxgl.Marker()
          .setLngLat([vehicle.attributes.longitude, vehicle.attributes.latitude]).setPopup(popup).addTo(map);
        
          //remove marker after 14 seconds
        setTimeout(() => {marker.remove()}, 14000);
      });

  setTimeout(run,15000);
}
run();  //calls function "run". recurring
