function initialize() {
  
  var myLatLng = {
    lat: 37.344717,
    lng: -121.979666
  };
  var myLatLng1 = {
    lat: 12.9257793,
    lng: 77.6811706
  };

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: myLatLng,
    scrollwheel: false,
    zoom: 4
  });

  // Create a map object and specify the DOM element for display.
  var map1 = new google.maps.Map(document.getElementById('map-canvas1'), {
    center: myLatLng1,
    scrollwheel: false,
    zoom: 4
  });

  // Create a marker and set its position.
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: 'Hello World!'
  });

  // Create a marker and set its position.
  var marker1 = new google.maps.Marker({
    map: map1,
    position: myLatLng1,
    title: 'Hello World!'
  });

}

google.maps.event.addDomListener(window, 'load', initialize);
