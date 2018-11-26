document.addEventListener("DOMContentLoaded", function() {
  var title = document.querySelector(".title")
  var image = document.querySelector(".comic")
  var text = document.querySelector("p")
  var secretDiv = document.querySelector(".secretDiv")
  var trigger = document.querySelector(".trigger")
  var closeButton = document.querySelector(".close-button")
  var body = document.querySelector("body")
  var wallpaper = document.querySelector('button')
  var wallpaperDefault = true;

  fetch("https://cors-anywhere.herokuapp.com/http://xkcd.com/" + randomize() + "/info.0.json")
    .then(function(data) {
      return data.json()
    })
    .then(function(data) {
      title.innerHTML = data.title
      image.src = data.img
      text.innerText = data.alt
    })

  function randomize() {
    return Math.floor(Math.random() * (666 - 1 + 1) + 1)
  }

  function toggleContent() {
    secretDiv.classList.toggle("show-content")
  }

  function windowOnClick(event) {
    if (event.target === secretDiv) {
      toggleModal()
    }
}

  function changeWallpaper() {
    if(wallpaperDefault === true) {
    body.style.backgroundImage = "url(http://wupimages.blob.core.windows.net/product/marvel-comic-book-wallpaper-rfgv-l.jpg)"
    title.style.background = "rgba(255, 255, 255, 0.8)"
    text.style.background = "rgba(255, 255, 255, 0.8)"
    wallpaperDefault = false
    } else {
    body.style.background = "white"
    wallpaperDefault = true
    }
  }

  trigger.addEventListener("click", toggleContent)
  closeButton.addEventListener("click", toggleContent)
  window.addEventListener("click", windowOnClick)

  wallpaper.addEventListener("click", changeWallpaper)
})
