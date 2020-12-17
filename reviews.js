import axios from "axios"

const BASE_URL = 'https://api.jikan.moe/v3';
let anime_id = 1;
let page = 1;


function getReviews() {
  axios.get(`${BASE_URL}/anime/${anime_id}/reviews`)
    .then(function (response) {
      // handle success
      console.log(response);
      let review = response.data.reviews;
      console.log(review)
      for (let i = 0; i < review.length; i++) {

        let posterObj = review[i].reviewer.image_url;
        let content = review[i].content;

        let newImg = document.createElement('img');
        newImg.setAttribute("src", posterObj);
        document.querySelector('div').appendChild(newImg);
        // console.log(title)

        let newContent = document.createElement('p');
        newContent.setAttribute('class', 'content');
        newContent.textContent = content;
        document.querySelector('div').appendChild(newContent);
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

window.addEventListener("load", function () { getReviews() })

