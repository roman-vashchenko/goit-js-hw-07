import { galleryItems } from "./gallery-items.js"
// Change code below this line

console.log(galleryItems)

const gallagyImages = document.querySelector(".gallery")

function createGallaryMarkup(items) {
  return items
    .map(
      (item) =>
        `<li><a class="gallery__item" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}" title="${item.description}" />
          </li></a>`
    )
    .join("")
}

const imgMarkup = createGallaryMarkup(galleryItems)

gallagyImages.innerHTML = imgMarkup

const lightbox = new SimpleLightbox(".gallery a", { captionDelay: 250 })
