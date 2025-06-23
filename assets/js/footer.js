document.addEventListener('DOMContentLoaded', function() {
  fetch('/components/footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('footer').innerHTML = data;
      if (window.feather) feather.replace();
      if (window.$ && window.$('.owl-carousel').owlCarousel) {
        $(".owl-carousel").owlCarousel({
          center: true,
          items: 2,
          loop: true,
          autoplay: true,
          autoplayTimeout: 3000,
          autoplayHoverPause: true,
          responsive: {
            600: { items: 4 },
            1300: { items: 6 }
          }
        });
      }
    });
}); 