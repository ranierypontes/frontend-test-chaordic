class Map {

  constructor() {
    console.log('>>> Map constructor');
    // Call methods
    this.init();
  }

  init() {
    function initializeMap() {
      let latlng = {lat: -7.1516027, lng: -34.8521834};
      let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true
      });
      var marker = new google.maps.Marker({
        position: latlng,
        map: map,
      });
    }

    initializeMap();
  }

}

export default Map;
