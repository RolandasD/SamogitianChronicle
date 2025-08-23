import { ARMIES_1444, SAMOGITIA_ARMY_BY_YEAR } from './armiesData.js';

function renderTable() {
  const tbody = document.querySelector('#armies-table tbody');
  ARMIES_1444.forEach(row => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${row.name}</td><td>${row.inf}</td><td>${row.cav}</td><td>${row.art}</td><td>${row.total}</td>`;
    tbody.appendChild(tr);
  });
}

function renderChart() {
  const ctx = document.getElementById('armies-chart').getContext('2d');
  const years = Object.keys(SAMOGITIA_ARMY_BY_YEAR);
  const inf = years.map(y => SAMOGITIA_ARMY_BY_YEAR[y].inf);
  const cav = years.map(y => SAMOGITIA_ARMY_BY_YEAR[y].cav);
  const art = years.map(y => SAMOGITIA_ARMY_BY_YEAR[y].art);

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: years,
      datasets: [
        { label: 'Infantry', data: inf, backgroundColor: 'rgba(54, 162, 235, 0.5)' },
        { label: 'Cavalry', data: cav, backgroundColor: 'rgba(255, 99, 132, 0.5)' },
        { label: 'Artillery', data: art, backgroundColor: 'rgba(255, 206, 86, 0.5)' }
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
