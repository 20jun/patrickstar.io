const inputName = document.querySelector("#input-name");
const loginForm = document.querySelector("#login-form");
const who = document.querySelector("#who");

function onLogOut() {
  loginForm.classList.remove("hidden");
  localStorage.removeItem("name");
  inputName.value = "";
  who.innerText = "이름을 입력해주세요!";
}

function onPaintName(name) {
  const logOutButton = document.createElement("button");
  logOutButton.innerText = "로그아웃";
  who.innerText = `${name}님 환영합니다!`;
  who.appendChild(logOutButton);
  loginForm.classList.add("hidden");

  logOutButton.addEventListener("click", onLogOut);
}

const localName = localStorage.getItem("name");

if (localName === null) {
  who.innerText = "이름을 입력해주세요!";
  loginForm.classList.remove("hidden");
} else {
  onPaintName(localName);
}

function onSubmitName(e) {
  e.preventDefault();

  const name = inputName.value;
  localStorage.setItem("name", name);
  onPaintName(name);
}

loginForm.addEventListener("submit", onSubmitName);
