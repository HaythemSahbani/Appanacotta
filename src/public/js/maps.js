
var map;
var munichMarienPlatz = {lat: 48.138, lng: 11.575};

var infoWindow;
var services, services2, services3, services4, services5;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: munichMarienPlatz,
        zoom: 16
    });

    infoWindow = new google.maps.InfoWindow()
    services = new google.maps.places.PlacesService(map);
    services2 = new google.maps.places.PlacesService(map);
    services3 = new google.maps.places.PlacesService(map);
    services4 = new google.maps.places.PlacesService(map);
    services5 = new google.maps.places.PlacesService(map);

    map.addListener('idle', performSearch);
}

function performSearch() {
  var queries = {
    starbucks: "Starbucks",
    coffeeFellows: "Coffee Fellows",
    sanfrancisco: "San Francisco Coffee Company",
    supremo: "SUPREMO",
    mcdonalds: "McDonald's"
  }

  var request = {
      location: munichMarienPlatz,
      radius: 200,
      query: queries.starbucks
  }

  var request2 = {
      location: munichMarienPlatz,
      radius: 200,
      query: queries.coffeeFellows
  }

  var request3 = {
      location: munichMarienPlatz,
      radius: 200,
      query: queries.sanfrancisco
  }

  var request4 = {
      location: munichMarienPlatz,
      radius: 200,
      query: queries.supremo
  }

  var request5 = {
      location: munichMarienPlatz,
      radius: 150,
      query: queries.mcdonalds
  }
  setTimeout(services.textSearch(request, callback), 800);
  setTimeout(services2.textSearch(request2, callback), 800);
  setTimeout(services3.textSearch(request3, callback), 800);
  setTimeout(services4.textSearch(request4, callback), 800);
  setTimeout(services5.textSearch(request5, callback), 800);
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
    //map.fitBounds(new google.maps.LatLngBounds().extend(place.geometry.location));

    google.maps.event.addListener(marker, 'click', function() {
        initService(services, place, marker);
        initService(services2, place, marker);
        initService(services3, place, marker);
        initService(services4, place, marker);
        initService(services5, place, marker);
    });
}

function initService(service, place, marker) {
  service.getDetails(place, function(result, status) {
      if (status !== google.maps.places.PlacesServiceStatus.OK) {
          console.error(status);
          return;
      }
      var boxText = document.createElement("html");

      var htmlBody = "<head>"
      htmlBody += "<link rel='stylesheet' href='../style/infoWindowStyle.css'/>";
      htmlBody += "</head><body style=''>";
      htmlBody += "<h3>"+result.name+"</h3>";
      htmlBody += result.formatted_address;
      if(result.website != ""){
        //htmlBody += "</br><a href='" + result.website + "'>Web Page</a>";
      }
      htmlBody += "</br><a href='menu.html' target='_blank'>Order Now</a>";
      htmlBody += "<body>";
      boxText.innerHTML = htmlBody;

      infoWindow.setContent(boxText);
      infoWindow.open(map, marker);
  });
}
