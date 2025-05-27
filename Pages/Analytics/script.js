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

document.addEventListener('DOMContentLoaded', function() {
  // Create mobile menu toggle button
  const mobileMenuToggle = document.createElement('div');
  mobileMenuToggle.className = 'mobile-menu-toggle';
  mobileMenuToggle.innerHTML = `
    <div class="menu-icon">
      <span></span>
      <span></span>
      <span></span>
    </div>
  `;
  
  // Insert the toggle button at the beginning of the dashboard
  const dashboard = document.querySelector('.dashboard');
  dashboard.insertBefore(mobileMenuToggle, dashboard.firstChild);
  
  // Get the left sidebar
  const leftSidebar = document.getElementById('Leftsidesection');
  
  // Toggle sidebar visibility when menu button is clicked
  mobileMenuToggle.addEventListener('click', function() {
    leftSidebar.classList.toggle('active');
    mobileMenuToggle.querySelector('.menu-icon').classList.toggle('active');
  });
  
  // Close sidebar when clicking outside of it (on mobile)
  document.addEventListener('click', function(event) {
    const isClickInsideSidebar = leftSidebar.contains(event.target);
    const isClickOnMenuButton = mobileMenuToggle.contains(event.target);
    
    if (!isClickInsideSidebar && !isClickOnMenuButton && window.innerWidth <= 767 && leftSidebar.classList.contains('active')) {
      leftSidebar.classList.remove('active');
      mobileMenuToggle.querySelector('.menu-icon').classList.remove('active');
    }
  });
  
  // Close sidebar when window is resized above mobile breakpoint
  window.addEventListener('resize', function() {
    if (window.innerWidth > 767 && leftSidebar.classList.contains('active')) {
      leftSidebar.classList.remove('active');
      mobileMenuToggle.querySelector('.menu-icon').classList.remove('active');
    }
  });
});