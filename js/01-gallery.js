import { galleryItems } from "./gallery-items.js"
// Change code below this line

console.log(galleryItems)

const gallagyImages = document.querySelector(".gallery")

function createGallaryMarkup(items) {
  return items
    .map(
      (item) => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
    )
    .join("")
}

const imgMarkup = createGallaryMarkup(galleryItems)

gallagyImages.innerHTML = imgMarkup

gallagyImages.addEventListener("click", onImgClick)

function onImgClick(event) {
  event.preventDefault()

  if (event.target.nodeName !== "IMG") {
    return
  }
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)
  instance.show()
  window.addEventListener("keydown", onCloseImg)
  function onCloseImg(event) {
    if (event.code === "Escape") {
      instance.close()
      window.removeEventListener("keydown", onCloseImg)
    }
  }
}
