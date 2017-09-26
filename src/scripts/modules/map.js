class Map {

  constructor() {
    console.log('>>> Map constructor');
    // Call methods
    this.initializeMap();
  }

  initializeMap() {
    const latlng = { lat: -7.1516027, lng: -34.8521834 };
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
    });
    const marker = new google.maps.Marker({
      position: latlng,
      map: map,
    });
  }

}

export default Map;
