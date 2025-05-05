
document.addEventListener('DOMContentLoaded', function() {
  var thumbnails = document.querySelectorAll(".thumbnail");
  var mainImage = document.getElementById("main-image");

  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {
      mainImage.src = this.src;
      thumbnails.forEach(thumb => thumb.classList.remove('active'));
      this.classList.add('active');
    });
  });
});


const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});