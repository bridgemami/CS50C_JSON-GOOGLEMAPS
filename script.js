/* Students: Please use this week's project for Week 9: Midterm Project: Map-Based Mobile App. 
     You will need to replace the contents of this JavaScript file with your own work, 
     and create any other files, if any, required for the assignment.
     When you are done, be certain to submit the assignment in both Repl.it and Canvas to be graded. */
var map, markers;
function initMap() {
  console.log('getting json data');
  $.getJSON("city.json", function(jsonData) {
    console.log('got the JSON');
    //1. define the lat, long for the center first
     //var point = {lat: 37.7539596, lng: -119.557863};
     //2. create a Goole Map object
     console.log('map');
    var point0 = {
      //lat: 37.774929, lng: -122.419418
      lat: jsonData[10].lat, lng: jsonData[10].long
    };
map = new google.maps.Map(document.getElementById('map'), {
  center: point0,
  zoom: 6
  }
  );
  var marker1 = new google.maps.Marker(
  {
    //1. the position of the maker point1
    position: point0,
    //2. which google map js var to place marker inside
    map: map,
    //3.title to show when user points at marker
    title: "Home Base"
  }
);
var infobox = new google.maps.InfoWindow(
  {
    content: "<h3>Home Base</h3>"
  }
);
marker1.addListener(
  //1 kind of event as a string
  'click',
  //2.a block of code contained in a function to run when the event happens
  function() {
    //tell the info window to open inside of our map
    infobox.open(
      //1.the map to open inside of
      map,
      //2 the point/marker to open the window at
      marker1
    );
  }
);
  console.log('Starting');
  var markers = [];
  for(z = 0; z < jsonData.length; z++){
   var point = {
     lat: jsonData[z].lat,
     lng: jsonData[z].long
   };
   console.log("start markers")
   markers[z] = new google.maps.Marker (
     {position: point,
     map: map,
     title: jsonData[z].city,
     custom_property: jsonData[z].note
     }   
   ); console.log("addListner")
   markers[z].addListener(
     'click', function() {
       var info1 = new google.maps.InfoWindow(
         {content: this.custom_property}
       );
       info1.open(map, this);
      }
                        );
                    }
                }
            );
        }