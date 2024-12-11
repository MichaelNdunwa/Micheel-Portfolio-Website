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
  { src: "image10.jpg", description: "Image 10 Description" },
  { src: "image11.jpg", description: "Image 11 Description" },
  { src: "image12.jpg", description: "Image 12 Description" },
  { src: "image13.jpg", description: "Image 13 Description" },
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
  document.querySelector(".image-container img").src = images[currentIndex].src;
  document.querySelector(".image-description").textContent = images[currentIndex].description;
}
updateImage();
