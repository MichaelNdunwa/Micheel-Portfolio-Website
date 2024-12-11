let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
// Image list
let images = [
  { src: "image1.jpg", description: "Image 1 Description" },
  { src: "image2.jpg", description: "Image 2 Description" },
  { src: "image3.jpg", description: "Image 3 Description" },
  { src: "image4.jpg", description: "Image 4 Description" },
  { src: "image3.jpg", description: "Image 5 Description" },
  { src: "image6.jpg", description: "Image 6 Description" },
  { src: "image7.jpg", description: "Image 7 Description" },
  { src: "image8.jpg", description: "Image 8 Description" },
  { src: "image9.jpg", description: "Image 9 Description" },
];
// current image index
let currentIndex = 0;

// hand buger menu
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
}

function updateImage() {
  const img = document.createElement("img");
  const imgwrapper = document.querySelector(".image-container");
  imgwrapper.innerHTML = "";
  img.src = images[currentIndex].src;
  imgwrapper.appendChild(img);
  document.querySelector(".image-description").textContent = images[currentIndex].description;
}
// function updateImage() {
//     const img = document.createElement('img')
//   document.querySelector(".image-container img").src = images[currentIndex].src;
//   document.querySelector(".image-description").textContent = images[currentIndex].description;
// }
updateImage();
