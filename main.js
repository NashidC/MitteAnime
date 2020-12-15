import axios from "axios"

const BASE_URL = 'https://api.jikan.moe/v3';
let page = 1;


function getTop() {
  axios.get(`${BASE_URL}/top/anime/${page}`)
    .then(function (response) {
      // handle success
      console.log(response);
      let posterImg = response.data.top;
      console.log(posterImg.length)
      for (let i = 0; i < posterImg.length; i++) {

        let posterObj = posterImg[i].image_url;
        let title = posterImg[i].title;
        let newImg = document.createElement('img');
        newImg.setAttribute("src", posterObj);
        document.querySelector('div').appendChild(newImg);
        console.log(title)

        let newTitle = document.createElement('p');
        newTitle.setAttribute('class', 'title');
        newTitle.textContent = title;
        document.querySelector('div').appendChild(newTitle);
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

}

window.addEventListener("load", function () { getTop() })

