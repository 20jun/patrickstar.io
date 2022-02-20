// 사이트에서 제공해준 나의 key
const API_KEY = "8030346f4e08a009e82ef8533d095c82";

// 내 위치를 제대로 불러온 경우
function onGeoOk(position) {
  // 위도
  const lat = position.coords.latitude;
  // 경도
  const lon = position.coords.longitude;

  // api 요청할 url
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  // url로 요청하고나서 받은 response 값에 여러 정보 담겨져 있음
  fetch(url).then((response) =>
    response.json().then((data) => {
      const weather = document.querySelector("#weather");
      const city = document.querySelector("#location");

      weather.innerText = `${data.weather[0].main} / ${data.main.temp}도`;
      city.innerText = data.name;
    })
  );
}

function onGeoError() {
  alert("위치 정보를 찾을 수 없습니다.");
}

// 내 위치를 불러올 때 사용하는 기본 제공 함수
// 첫번째 인자는 내 위치를 제대로 불러왔을 때 실행할 함수,
// 두번째 인자는 내 위치를 제대로 불러오지 못한 경우 실행할 함수
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
