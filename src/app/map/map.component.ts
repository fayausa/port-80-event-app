import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pwa-map',
  templateUrl: 'map.component.html',
  styles: []
})
export class MapComponent implements OnInit {
  mapInstance: any;
  options = {
  layers: [
    L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYW1hbHNoZWh1IiwiYSI6ImNqM2Nub3BvZDAwMGwzMm81bmRvN2NmOXEifQ.IvKLj2jB_z4FF2HKH7AkXA', { maxZoom: 18, attribution: 'Leaflet' })
  ],
  zoom: 16.2,
  center: L.latLng({ lat: 8.5580967, lng: 76.8815605 })
};

  constructor() { }

  ngOnInit() {
  }
   onMapReady(map: L.Map) {
     // create custom icon
    const icon = L.icon({
        iconUrl: 'https://lh4.ggpht.com/Tr5sntMif9qOPrKV_UVl7K8A_V3xQDgA7Sw_qweLUFlg76d_vGFA7q1xIKZ6IcmeGqg=w300',
        iconSize: [50, 50], // size of the icon
        });


    // specify popup options
    const customOptions: any = {
        'maxWidth': '500',
        'className' : 'custom'
        };

    // create marker object, pass custom icon as option, pass content and options to popup, add to map
    L.marker([8.5571720, 76.8823780], {icon: icon}).bindPopup(`
            <b>FAYA INNOVATIONS PRIVATE LIMITED</b><br/>
            <a href="https://goo.gl/maps/t2zRHttzzd22">Navigate</a><br/><br/>
            L13, Basement Floor 1, Thejaswini,<br/>
            Technopark Campus, Technopark,<br/>
            Technopark Rd, Technopark Campus,<br/>
            Thiruvananthapuram, Kerala 695581, India`)
          .addTo(map);
  }
}
