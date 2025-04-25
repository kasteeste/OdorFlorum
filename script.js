
var thumbnails = document.querySelectorAll(".thumbnail")
var mainImage = document.getElementById("main-image")

for (var i = 0; i < thumbnails.length; i++) {
  thumbnails[i].addEventListener("click", function () {
    mainImage.src = this.src
  })
}