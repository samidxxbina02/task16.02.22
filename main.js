const wrapper = document.querySelector(".container");
const API = "https://www.omdbapi.com/?apikey=b6003d8a&s=All";

fetch(API) //получаем Promise, который обещает вернуть Response  object
  //Response => Promise , который обещает вернуть данные в json формате
  .then((data) => data.json())
  // отлавливаем успешный результат выполнения промиса при помощи then
  .then((data) =>
    data.Search.forEach((item) => {
      wrapper.innerHTML += `
      <div class="wrapper">
      <img src = ${item.Poster}/>
      <h2 class='title'>${item.Title}</h2>
      <span class='year'>${item.Year}</span>
      </div>
      
      `;
    })
  );
