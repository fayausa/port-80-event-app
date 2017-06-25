import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pwa-map',
  templateUrl: 'map.component.html',
  styles: []
})
export class MapComponent implements OnInit {
 // Open Street Map Definition
  LAYER_OSM = {
    id: 'openstreetmap',
    name: 'Open Street Map',
    enabled: true,
    // tslint:disable-next-line:max-line-length
    layer: L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYW1hbHNoZWh1IiwiYSI6ImNqM2Nub3BvZDAwMGwzMm81bmRvN2NmOXEifQ.IvKLj2jB_z4FF2HKH7AkXA', {
      maxZoom: 18,
      attribution: `Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>
                    contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,
                    Imagery © <a href="http://mapbox.com">Mapbox</a>`,
    })
  };

  // Values to bind to Leaflet Directive
  layersControlOptions = {
    position: 'bottomright'
  };
  baseLayers = {
    'Open Street Map': this.LAYER_OSM.layer
  };
  options = {
    zoom: 10,
    center: L.latLng([40.4859372, -111.8768695])
  };

  constructor() { }

  ngOnInit() {
  }

}
