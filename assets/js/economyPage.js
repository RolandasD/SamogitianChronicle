import { ECONOMY_BY_YEAR } from './economyData.js';

function renderTable() {
  const tbody = document.querySelector('#economy-table tbody');
  Object.entries(ECONOMY_BY_YEAR).forEach(([year, data]) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${year}</td><td>${data.income}</td><td>${data.expenses}</td>`;
    tbody.appendChild(tr);
  });
}

function renderChart() {
  const ctx = document.getElementById('economy-chart').getContext('2d');
  const years = Object.keys(ECONOMY_BY_YEAR);
  const income = years.map(y => ECONOMY_BY_YEAR[y].income);
  const expenses = years.map(y => ECONOMY_BY_YEAR[y].expenses);

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: years,
      datasets: [
        { label: 'Income', data: income, borderColor: 'green', fill: false },
        { label: 'Expenses', data: expenses, borderColor: 'red', fill: false }
      ]
    },
    options: {
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
}

renderTable();
renderChart();
