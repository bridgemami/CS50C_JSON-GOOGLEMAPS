var map, markers;
function initMap() {
  console.log("begin geo")
         
  console.log('getting json data');
  $.getJSON("city.json", function(jsonData) {
    console.log('got the JSON');
    //1. define the lat, long for the center first
     //var point = {lat: 37.7539596, lng: -119.557863};
     //2. create a Goole Map object
     console.log('map');
    var point0 =
    {
      //lat: 37.774929, lng: -122.419418
      lat: jsonData[10].lat, lng: jsonData[10].long
    
    };
map = new google.maps.Map(document.getElementById('map'), {
  center: point0,
  zoom: 3,
  styles: [
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e9e9e9"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dedede"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#333333"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f2f2f2"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    }
]

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
                 if ( navigator.geolocation ) {
               console.log("geo");     
                    // now we can perform the steps in javascript to create the map
                    navigator.geolocation.getCurrentPosition(
                        // the anonymous function we pass to getCurrentPosition()
                        // runs once the browser finds its own lat/long
                        // it returns that value in a argument passed to our function
                        function(position) {
                            // step 1. define the geocoord (lat,long) for the center first
                            var geocoord1 = {
                                // copy the browser geocoord lat 
                                lat: position.coords.latitude,
                                // copy the browser geocoord long
                                lng: position.coords.longitude
                            };
                            
                            // step 2. create a google Map object
                            /*var map2 = new google.maps.Map(
                                // tell gmap the html element to draw map inside of
                                document.getElementById('map'),
                                {
                                    // provide the center in latitude and longitude
                                    center: geocoord1
                                    // set the zoom level for the map
                                    //zoom: 13
                                }
                            );*/ console.log("custom")
                            /*const cmarker = {
    path: "hand-index-thumb.svg",
    fillColor: "blue",
    
    strokeWeight: 0,
    rotation: 0,
    scale: 2,
    anchor: new google.maps.Point(15, 30),
  }; console.log('end custom')*/
                            // step 3. create a marker that is placed on the map
                            var marker2 = new google.maps.Marker(
                                {
                                    // 1. the position of the marker geocoord
                                    position: geocoord1,
                                    // 2. which google map js var to place marker inside
                                    map: map,
                                    // 3. title to show when user points at marker
                                    title: 'Home',
                                    //icon: cmarker
                                    icon: 'hand-index-thumb.svg'
                                }
                            ); console.log("click");
var infobox = new google.maps.InfoWindow(
  {
    content: "<h3>Current Location</h3>"
  }
);
marker2.addListener(
  //1 kind of event as a string
  'click',
  //2.a block of code contained in a function to run when the event happens
  function() {
    //tell the info window to open inside of our map
    infobox.open(
      //1.the map to open inside of
      map,
      //2 the point/marker to open the window at
      marker2
    );
  }
);                            

                        }
                    );
               }
            //}
console.log("end geo");   
                }
           ) 
           
        }