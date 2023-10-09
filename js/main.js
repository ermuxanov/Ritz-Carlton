import { Viewer } from "@photo-sphere-viewer/core";

let modal = document.querySelector(".modal");
let modalOpen = document.querySelector(".modal__btn");
let modalClose = document.querySelector(".modal__wrapper-close-icon");
let body = document.querySelector("body");
let header = document.querySelector("header");

modalOpen.addEventListener("click", () => {
  modal.classList.add("active");
});
modalClose.addEventListener("click", () => {
  modal.classList.remove("active");
});

const point = document.querySelectorAll(".point");

point.forEach((el) => {
  el.addEventListener("click", () => {
    const imgPath = el.dataset.image;

    show(imgPath);
  });
});
function show(imgPath) {
  const viewerContainer = document.querySelector(".viewer");
  const viewerClose = document.querySelector(".viewer__close");
  viewerContainer.style.display = "block";
  viewerClose.addEventListener("click", () => {
    viewerContainer.style.display = "none";
    body.style.backdropFilter = "none";
    header.style.visibility = "visible";
    viewer.destroy();
  });
  if (viewerContainer) {
    body.style.backdropFilter = "blur(5px)";
    header.style.visibility = "hidden";
  }
  const viewer = new Viewer({
    container: viewerContainer,
    panorama: imgPath,
  });
}
