// Simple chart using Chart.js or fallback to a static image
window.addEventListener('DOMContentLoaded', () => {
  if (window.Chart) {
    const ctx = document.getElementById('analyticsChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [
          {
            label: 'Label 1',
            data: [7, 12, 10, 15, 8, 17, 13],
            borderColor: '#5a4ff3',
            backgroundColor: 'rgba(90,79,243,0.07)',
            tension: 0.4,
            fill: true,
            pointRadius: 2,
          },
          {
            label: 'Label 1',
            data: [2, 5, 7, 6, 8, 9, 8],
            borderColor: '#ffce4e',
            backgroundColor: 'rgba(255, 206, 78, 0.07)',
            tension: 0.4,
            fill: true,
            pointRadius: 2,
          },
        ]
      },
      options: {
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  } else {
    // Fallback: static image or nothing
  }
});