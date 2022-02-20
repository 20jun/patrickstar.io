const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();

  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${year}년${month}월${day}일${hours}시${minutes}분${seconds}초`;
}

getClock();

setInterval(getClock, 1000);
