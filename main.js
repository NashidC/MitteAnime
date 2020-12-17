// import axios from "axios"

// const BASE_URL = 'https://api.jikan.moe/v3';
// let page = 1;


// function getTop() {
//   axios.get(`${BASE_URL}/top/anime/${page}`)
//     .then(function (response) {
//       // handle success
//       console.log(response);
//       let posterImg = response.data.top;
//       console.log(posterImg.length)
//       for (let i = 0; i < posterImg.length; i++) {

//         let posterObj = posterImg[i].image_url;
//         let title = posterImg[i].title;
//         let newImg = document.createElement('img');
//         newImg.setAttribute("src", posterObj);
//         document.querySelector('div').appendChild(newImg);
//         console.log(title)

//         let newTitle = document.createElement('p');
//         newTitle.setAttribute('class', 'title');
//         newTitle.textContent = title;
//         document.querySelector('div').appendChild(newTitle);
//       }
//     })
//     .catch(function (error) {
//       // handle error
//       console.log(error);
//     })
//     .then(function () {
//       // always executed
//     });

// }

// window.addEventListener("load", function () { getTop() })

//shans code

// import axios from "axios";
// // Top is a function that calls the API and console.log the data
// export default async () => {
//   const url = "https://api.jikan.moe/v3/top/anime/1";
//   try {
//     const { data } = await axios.get(url);
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// };

// (() => {
//   window.addEventListener("load", () => {
//     const topButton = document.getElementById("current");
//     topButton.addEventListener("click", async () => {
//       let apiData = await Topapi();
//       console.log(apiData);
//       let displayTop = document.getElementById("topContent"); //grab this element from html
//       for (const animeObj of apiData.top) {
//         //const in FOR of is = (i) "animeObj"
//         // looping thru array of obj
//         let parentElement = document.createElement("div"); //parent element created a new div
//         let titleElement = document.createElement("div"); //parent element = new div
//         titleElement.innerHTML = animeObj.title; // this line will add the element value
//         parentElement.appendChild(titleElement); // while this line will push the value and make it availbe to the users eye.
//         let img1 = document.createElement("img");
//         img1.src = animeObj.image_url;
//         parentElement.appendChild(img1);
//         displayTop.appendChild(parentElement);
//       }
//     });
//   });
// })();

import axios from "axios"

const BASE_URL = 'https://api.jikan.moe/v3';
let page = 1;


function getTop() {
  axios.get(`${BASE_URL}/top/anime/${page}`)
    .then(function (response) {
      // handle success
      console.log(response);
      let animeObj = response.data.top;
      console.log(animeObj.length)
      let displayTop = document.getElementById("topContent"); //grab this element from html
      for (let i = 0; i < animeObj.length; i++) {

        let parentElement = document.createElement("div"); //parent element created a new div

        let img1 = document.createElement("img");

        img1.src = animeObj[i].image_url;
        parentElement.appendChild(img1);
        displayTop.appendChild(parentElement);

        let titleElement = document.createElement("p"); //parent element = new div
        titleElement.innerHTML = animeObj[i].title; // this line will add the element value
        parentElement.appendChild(titleElement); // while this line will push the value and make it availbe to the users eye.
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


