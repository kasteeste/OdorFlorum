
document.addEventListener('DOMContentLoaded', function() {
  var thumbnails = document.querySelectorAll(".thumbnail");
  var mainImage = document.getElementById("main-image");

  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {
      mainImage.src = this.src;
      // Remove active class from all thumbnails
      thumbnails.forEach(thumb => thumb.classList.remove('active'));
      // Add active class to clicked thumbnail
      this.classList.add('active');
    });
  });
});
