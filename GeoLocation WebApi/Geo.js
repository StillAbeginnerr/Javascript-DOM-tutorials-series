function received() {

    navigator.geolocation.getCurrentPosition(function(position) { // It fetches the position of your locations 
        /*
        connecting lat of h3 in html to our  user defined variable here to reduce complexity 
        and most importantly it connects our variable to that id
        */
        let lat = document.getElementById("lat");
        let long = document.getElementById("long");
        lat.innerHTML = position.coords.latitude; // displays the latitude
        long.innerHTML = position.coords.longitude; // displays the longitude
    });
}