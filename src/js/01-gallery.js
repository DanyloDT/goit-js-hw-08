// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
// import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";

// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery')

const makeItemCard = ({preview, original, description} = {}) => {
    return `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
        </a>
    </li>`;
};

const makeCardArr = galleryItems.map(imgInfo => {
  return makeItemCard(imgInfo)
})

gallery.innerHTML = makeCardArr.join("")

new SimpleLightbox('.gallery a', {captions: true, captionDelay: 250});
