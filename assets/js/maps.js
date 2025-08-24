document.addEventListener('DOMContentLoaded', () => {
  const map = L.map('map').setView([55.0, 23.0], 6);

  const base = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  base.addTo(map);

  const regionsLayer = L.layerGroup();
  const heartlandLayer = L.layerGroup();
  const worldLayer = L.layerGroup();

  const heartlandOverlay = L.imageOverlay('maps/heartland.png', [[50, 15], [60, 30]]);
  heartlandOverlay.addTo(heartlandLayer);

  const worldOverlay = L.imageOverlay('maps/world.png', [[-90, -180], [90, 180]]);
  worldOverlay.addTo(worldLayer);

  fetch('maps/regions.geojson')
    .then(response => response.json())
    .then(data => {
      L.geoJSON(data, {
        style: {
          color: '#555',
          weight: 1,
          fillColor: '#c0d6e4',
          fillOpacity: 0.5
        },
        onEachFeature: (feature, layer) => {
          if (feature.properties && feature.properties.name) {
            layer.bindTooltip(feature.properties.name);
          }
        }
      }).addTo(regionsLayer);
    })
    .catch(err => console.error('Error loading regions:', err));

  regionsLayer.addTo(map);

  const overlays = {
    Regions: regionsLayer,
    Heartland: heartlandLayer,
    World: worldLayer
  };

  L.control.layers(null, overlays).addTo(map);

  const regionsCheckbox = document.getElementById('layer-regions');
  const heartlandCheckbox = document.getElementById('layer-heartland');
  const worldCheckbox = document.getElementById('layer-world');

  regionsCheckbox.addEventListener('change', e => {
    if (e.target.checked) {
      map.addLayer(regionsLayer);
    } else {
      map.removeLayer(regionsLayer);
    }
  });

  heartlandCheckbox.addEventListener('change', e => {
    if (e.target.checked) {
      map.addLayer(heartlandLayer);
    } else {
      map.removeLayer(heartlandLayer);
    }
  });

  worldCheckbox.addEventListener('change', e => {
    if (e.target.checked) {
      map.addLayer(worldLayer);
    } else {
      map.removeLayer(worldLayer);
    }
  });
});
