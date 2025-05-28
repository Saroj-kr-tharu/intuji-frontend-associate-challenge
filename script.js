// Wait until DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Chart.js initialization
  if (window.Chart) {
    const ctx = document.getElementById('analyticsChart')?.getContext('2d');
    if (ctx) {
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
              label: 'Label 2',
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
    }
  }

  // Mobile menu functionality
  const dashboard = document.querySelector('.dashboard');
  const leftSidebar = document.getElementById('Leftsidesection');
  
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
  if (dashboard) {
    dashboard.insertBefore(mobileMenuToggle, dashboard.firstChild);
  }
  
  // Toggle sidebar visibility when menu button is clicked
  mobileMenuToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    leftSidebar.classList.toggle('active');
    mobileMenuToggle.querySelector('.menu-icon').classList.toggle('active');
  });
  
  // Profile header popup functionality
  const notificationBtn = document.querySelector('.notification-area .icon-button:first-child');
  const messageBtn = document.querySelector('.notification-area .icon-button:last-child');
  const profileBtn = document.querySelector('.user-profile');
  
  const notificationsPopup = document.getElementById('notifications-popup');
  const messagesPopup = document.getElementById('messages-popup');
  const profilePopup = document.getElementById('profile-popup');
  
  // Function to close all popups
  function closeAllPopups() {
    if (notificationsPopup) notificationsPopup.classList.remove('show');
    if (messagesPopup) messagesPopup.classList.remove('show');
    if (profilePopup) profilePopup.classList.remove('show');
  }
  
  // Toggle notification popup
  if (notificationBtn && notificationsPopup) {
    notificationBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      
      if (notificationsPopup.classList.contains('show')) {
        notificationsPopup.classList.remove('show');
      } else {
        closeAllPopups();
        notificationsPopup.classList.add('show');
      }
    });
  }
  
  // Toggle messages popup
  if (messageBtn && messagesPopup) {
    messageBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      
      if (messagesPopup.classList.contains('show')) {
        messagesPopup.classList.remove('show');
      } else {
        closeAllPopups();
        messagesPopup.classList.add('show');
      }
    });
  }
  
  // Toggle profile popup
  if (profileBtn && profilePopup) {
    profileBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      
      if (profilePopup.classList.contains('show')) {
        profilePopup.classList.remove('show');
      } else {
        closeAllPopups();
        profilePopup.classList.add('show');
      }
    });
  }
  
  // Prevent clicks inside popups from closing them
  const popups = document.querySelectorAll('.header-popup');
  popups.forEach(popup => {
    popup.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  });
  
  // Global document click handler (close all popups and mobile menu)
  document.addEventListener('click', function(event) {
    // Close popups
    closeAllPopups();
    
    // Close sidebar when clicking outside of it (on mobile)
    if (leftSidebar) {
      const isClickInsideSidebar = leftSidebar.contains(event.target);
      const isClickOnMenuButton = mobileMenuToggle.contains(event.target);
      
      if (!isClickInsideSidebar && !isClickOnMenuButton && 
          window.innerWidth <= 767 && 
          leftSidebar.classList.contains('active')) {
        leftSidebar.classList.remove('active');
        mobileMenuToggle.querySelector('.menu-icon').classList.remove('active');
      }
    }
  });
  
  // Close sidebar when window is resized above mobile breakpoint
  window.addEventListener('resize', function() {
    if (leftSidebar && 
        window.innerWidth > 767 && 
        leftSidebar.classList.contains('active')) {
      leftSidebar.classList.remove('active');
      mobileMenuToggle.querySelector('.menu-icon').classList.remove('active');
    }
  });
});