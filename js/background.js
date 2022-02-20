const img = ["0.jpg", "1.jpg", "2.jpg"];
const backImg = document.querySelector("#back-img");
backImg.style.float = "right";
document.body.style.backgroundSize = "100% 100%";

function changeImg() {
  const randomImage = img[Math.floor(Math.random() * img.length)];

  document.body.style.backgroundImage = `url(img/${randomImage})`;
}

changeImg();

backImg.addEventListener("click", changeImg);
