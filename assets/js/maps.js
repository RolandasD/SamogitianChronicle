document.addEventListener('DOMContentLoaded', () => {
  const map = L.map('map').setView([55.0, 23.0], 6);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

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
      }).addTo(map);
    })
    .catch(err => console.error('Error loading regions:', err));
});
