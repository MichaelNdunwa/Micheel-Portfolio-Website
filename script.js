let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
// Image list
let images = [
  { src: "https://utfs.io/f/3VnqAtHoXObw8hBi1YTkavuz71ReELfHTVQYmMwsy9PKiGFU", description: "Happy me at TxE Summit 2023 Enugu." },
  { src: "https://utfs.io/f/3VnqAtHoXObwTbC1M6DdiJlRoIspn269QqF7mcwHZANKTjz4", description: "With a group of friends at Techflock 2022 Umuahi" },
  { src: "https://utfs.io/f/3VnqAtHoXObwMxdfWoXxoWOXrfiytd3bBDGeaKmu8zh6NVRJ", description: "Developing a mobile app at my space." },
  { src: "https://utfs.io/f/3VnqAtHoXObwMxdfWoXxoWOXrfiytd3bBDGeaKmu8zh6NVRJ", description: "My friends and I at GOtv event." },
  { src: "https://utfs.io/f/3VnqAtHoXObwAi3Fpc7UuW8ZY2eJLRydgDq5XO6mctrpCBzk", description: "Memory from my matriculation day." },
  { src: "https://utfs.io/f/3VnqAtHoXObwAi3Fpc7UuW8ZY2eJLRydgDq5XO6mctrpCBzk", description: "Studying for exams." },
  { src: "https://utfs.io/f/3VnqAtHoXObwmjeGnn40Nsupc5SvL37faZoCQHyitwJdIUOG", description: "Went to do solar installation with a Boss friend at Oyo." },
  { src: "https://utfs.io/f/3VnqAtHoXObwmjeGnn40Nsupc5SvL37faZoCQHyitwJdIUOG", description: "Enjoying the moment on a school tracktor." },
  { src: "https://utfs.io/f/3VnqAtHoXObw7q4d2jfrvYq9w4n3hUOVsaQLzP6SeIdio1TE", description: "Participating in chemistry practical at my school lab, during my 100L days." },
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

// function updateImage() {
//   const img = document.createElement("img");
//   const imgwrapper = document.querySelector(".image-container");
//   imgwrapper.innerHTML = "";
//   img.src = images[currentIndex].src;
//   imgwrapper.appendChild(img);
//   document.querySelector(".image-description").textContent = images[currentIndex].description;
// }
function updateImage() {
    const img = document.createElement('img')
  document.querySelector(".image-container img").src = images[currentIndex].src;
  document.querySelector(".image-description").textContent = images[currentIndex].description;
}
updateImage();
