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
                            var map2 = new google.maps.Map(
                                // tell gmap the html element to draw map inside of
                                document.getElementById('map'),
                                {
                                    // provide the center in latitude and longitude
                                    center: geocoord1
                                    // set the zoom level for the map
                                    //zoom: 13
                                }
                            ); console.log("custom")
                            const cmarker = {
    path: "hand-index-thumb.svg",
    fillColor: "blue",
    
    strokeWeight: 0,
    rotation: 0,
    scale: 2,
    anchor: new google.maps.Point(15, 30),
  }; console.log('end custom')
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
                            );
                        }
                    );
               }
            //}
console.log("end geo");