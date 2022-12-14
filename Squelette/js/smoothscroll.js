document.addEventListener('DOMContentLoaded', function() {
    window.onscroll = function() {
      document.getElementById("back-icon").className = (window.pageYOffset > 100) ? "a-visible" : "a-invisible";
    };
  });