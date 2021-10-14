
            function initMap() {
                
                if ( navigator.geolocation ) {
                    
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
                            var map1 = new google.maps.Map(
                                // tell gmap the html element to draw map inside of
                                document.getElementById('map'),
                                {
                                    // provide the center in latitude and longitude
                                    center: geocoord1,
                                    // set the zoom level for the map
                                    zoom: 13
                                }
                            );
                            
                            // step 3. create a marker that is placed on the map
                            var marker1 = new google.maps.Marker(
                                {
                                    // 1. the position of the marker geocoord
                                    position: geocoord1,
                                    // 2. which google map js var to place marker inside
                                    map: map1,
                                    // 3. title to show when user points at marker
                                    title: 'I am a marker!'
                                }
                            );
                        }
                    );
                }
            }
