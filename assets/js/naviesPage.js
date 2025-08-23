import { NAVIES_1444, SAMOGITIA_NAVY_BY_YEAR } from './naviesData.js';

function renderTable() {
  const tbody = document.querySelector('#navies-table tbody');
  NAVIES_1444.forEach(row => {
    const tr = document.createElement('tr');
    tr.innerHTML =
      `<td>${row.name}</td>` +
      `<td>${row.heavy}</td>` +
      `<td>${row.light}</td>` +
      `<td>${row.galley}</td>` +
      `<td>${row.trans}</td>` +
      `<td>${row.total}</td>`;
    tbody.appendChild(tr);
  });
}

function renderChart() {
  const ctx = document.getElementById('navies-chart').getContext('2d');
  const years = Object.keys(SAMOGITIA_NAVY_BY_YEAR);
  const heavy = years.map(y => SAMOGITIA_NAVY_BY_YEAR[y].heavy);
  const light = years.map(y => SAMOGITIA_NAVY_BY_YEAR[y].light);
  const galley = years.map(y => SAMOGITIA_NAVY_BY_YEAR[y].galley);
  const trans = years.map(y => SAMOGITIA_NAVY_BY_YEAR[y].trans);

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: years,
      datasets: [
        { label: 'Heavy', data: heavy, backgroundColor: 'rgba(54, 162, 235, 0.5)' },
        { label: 'Light', data: light, backgroundColor: 'rgba(255, 99, 132, 0.5)' },
        { label: 'Galley', data: galley, backgroundColor: 'rgba(75, 192, 192, 0.5)' },
        { label: 'Transport', data: trans, backgroundColor: 'rgba(255, 206, 86, 0.5)' }
      ]
    },
    options: {
      scales: {
        x: { stacked: true },
        y: { beginAtZero: true, stacked: true }
      }
    }
  });
}

renderTable();
renderChart();
