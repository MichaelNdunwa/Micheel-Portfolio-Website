let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
// Image list
  const images = [
  { src: "./image1.webp", description: "Happy me at TxE Summit 2023 Enugu." },
  { src: "./image2.webp", description: "With a group of friends at Techflock 2022 Umuahi" },
  { src: "./image3.webp", description: "Developing a mobile app at my space." },
  { src: "./image4.webp", description: "My friends and I at GOtv event." },
  { src: "./image5.webp", description: "Memory from my matriculation day." },
  { src: "./image6.webp", description: "Studying for exams." },
  { src: "./image7.webp", description: "Went to do solar installation with a Boss friend at Oyo." },
  { src: "./image8.webp", description: "Enjoying the moment on a school tracktor." },
  { src: "./image9.webp", description: "Participating in chemistry practical at my school lab, during my 100L days." },
];
// current image index
let currentIndex = 0;

// hand buger menu
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

function updateImage() {
    const img = document.createElement('img')
  document.querySelector(".image-container img").src = images[currentIndex].src;
  document.querySelector(".image-description").textContent = images[currentIndex].description;
}
updateImage();

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
}



// function updateImage() {
//   const img = document.createElement("img");
//   const imgwrapper = document.querySelector(".image-container");
//   imgwrapper.innerHTML = "";
//   img.src = images[currentIndex].src;
//   imgwrapper.appendChild(img);
//   document.querySelector(".image-description").textContent = images[currentIndex].description;
// }

