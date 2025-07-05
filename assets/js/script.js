// Basic JS to enable sidebar and navigation interactivity

// Sidebar toggle for contact info (if you want to add interactivity)
document.querySelectorAll('[data-sidebar-btn]').forEach(function(btn) {
  btn.addEventListener('click', function() {
    var sidebarInfoMore = document.querySelector('.sidebar-info_more');
    if (sidebarInfoMore) {
      sidebarInfoMore.classList.toggle('active');
    }
  });
});

// Navbar section switching
document.querySelectorAll('[data-nav-link]').forEach(function(navBtn) {
  navBtn.addEventListener('click', function() {
    document.querySelectorAll('[data-nav-link]').forEach(function(btn) {
      btn.classList.remove('active');
    });
    navBtn.classList.add('active');

    var pageName = navBtn.textContent.trim().toLowerCase();
    document.querySelectorAll('article').forEach(function(article) {
      if (article.dataset.page === pageName) {
        article.classList.add('active');
      } else {
        article.classList.remove('active');
      }
    });
  });
});
