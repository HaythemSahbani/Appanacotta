
var map;
var munichMarienPlatz = {lat: 48.138, lng: 11.575};

var infoWindow;
var services;

var request = {
    location: munichMarienPlatz,
    radius: 400,
    query: 'restaurant'
}


function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: munichMarienPlatz,
        zoom: 16
    });

    infoWindow = new google.maps.InfoWindow()
    services = new google.maps.places.PlacesService(map);

    map.addListener('idle', performSearch);
}

function performSearch() {
    services.textSearch(request, callback);
}

function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            addMarker(results[i]);
        }
    }
}

function addMarker(place) {
    var marker = new google.maps.Marker({
        map: map,
        title: 'Coffee Shop',
        position: place.geometry.location,
        icon: {
            url: '/img/coffee-icon-512.png',
            anchor: new google.maps.Point(30, 30),
            scaledSize: new google.maps.Size(60, 60)
        }
    });

    google.maps.event.addListener(marker, 'click', function() {
        services.getDetails(place, function(result, status) {
            if (status !== google.maps.places.PlacesServiceStatus.OK) {
                console.error(status);
                return;
            }
            var boxText = document.createElement("html");

            var htmlBody = "<head>"
            htmlBody += "<link rel='stylesheet' href='../style/infoWindowStyle.css'/>";
            htmlBody += "</head><body style=''>";
            htmlBody += result.name;
            htmlBody += "<body>";
            boxText.innerHTML = htmlBody;

            infoWindow.setContent(boxText);
            infoWindow.open(map, marker);
        });
    });
}