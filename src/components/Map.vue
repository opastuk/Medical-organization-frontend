<template>
        <div class="map" id="map"></div>
</template>
<script>
import { Vue, Component } from 'vue-property-decorator';
// eslint-disable-next-line import/no-duplicates
import * as Vue2Leaflet from 'vue2-leaflet';
// eslint-disable-next-line import/no-duplicates
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
  @Component({
    components:
    Vue2Leaflet,
    LMap,
    LTileLayer,
    LMarker,
  })
export default class Map extends Vue {
    map = null;

    tileLayer = null;

    layers = [
      {
        id: 0,
        name: 'City',
        active: false,
        features: [
          {
            id: 0,
            name: 'Санкт-Петербург',
            type: 'marker',
            coords: [59.9386300, 30.3141300],
          },
          {
            id: 1,
            name: 'Архангельск',
            type: 'marker',
            coords: [64.5401000, 40.5433000],
          },
          {
            id: 2,
            name: 'Вологда',
            type: 'marker',
            coords: [59.2239000, 39.8839800],
          },
          {
            id: 3,
            name: 'Ярославль',
            type: 'marker',
            coords: [57.6298700, 39.8736800],
          },
          {
            id: 4,
            name: 'Москва',
            type: 'marker',
            coords: [55.7522200, 37.6155600],
          },
          {
            id: 5,
            name: 'Нижний Новгород',
            type: 'marker',
            coords: [56.3286700, 44.0020500],
          },
          {
            id: 6,
            name: 'Казань',
            type: 'marker',
            coords: [55.7887400, 49.1221400],
          },
          {
            id: 7,
            name: 'Екатеринбург',
            type: 'marker',
            coords: [56.8519000, 60.6122000],
          },
          {
            id: 8,
            name: 'Челябинск',
            type: 'marker',
            coords: [55.1540200, 61.4291500],
          },
          {
            id: 9,
            name: 'Саратов',
            type: 'marker',
            coords: [51.5405600, 46.0086100],
          },
          {
            id: 10,
            name: 'Ростов-на-Дону',
            type: 'marker',
            coords: [47.2313500, 39.7232800],
          },
          {
            id: 11,
            name: 'Краснодар',
            type: 'marker',
            coords: [45.0448400, 38.9760300],
          },
          {
            id: 12,
            name: 'Сочи',
            type: 'marker',
            coords: [43.5991700, 39.7256900],
          },
          {
            id: 13,
            name: 'Пятигорск',
            type: 'marker',
            coords: [44.0486100, 43.0594400],
          },
        ],
      },
    ];

    mounted() {
      this.initMap();
      this.initLayers();
    }

    // eslint-disable-next-line class-methods-use-this
    initMap() {
      // eslint-disable-next-line no-undef
      this.map = L.map('map').setView([55.7522200, 37.6155600], 4);
      // eslint-disable-next-line no-undef
      this.tileLayer = L.tileLayer(
        'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png',
        {
          maxZoom: 18,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
        },
      );
      this.tileLayer.addTo(this.map);
    }

    // eslint-disable-next-line class-methods-use-this
    initLayers() {
      this.layers.forEach((layer) => {
        const markerFeatures = layer.features.filter(feature => feature.type === 'marker');

        markerFeatures.forEach((feature) => {
          // eslint-disable-next-line no-param-reassign,no-undef
          feature.leafletObject = L.marker(feature.coords)
            .bindPopup(feature.name);
          feature.leafletObject.addTo(this.map);
        });
      });
    }
  }
</script>
<style>
.map {
  height: 100%;
}
</style>
