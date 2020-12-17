// import axios from "axios";
// export default async () => {
//   const url = "https://api.jikan.moe/v3/anime/1/news";
//   try {
//     const { data } = await axios.get(url);
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// };


// import news from "./news";
// (() => {
//   window.addEventListener("load", () => {
//     const newsButton = document.getElementById("news");
//     newsButton.addEventListener("load", async () => {
//       let newsInfo = await news();
//       console.log(newsInfo);
//       let displayNews = document.getElementById("newsContent"); // here i am grabbing the html ID newsContent
//       //
//       let remove = document.getElementById("topContent");
//       remove.remove();
//       // Line above removes background image on News
//       for (const newsObj of newsInfo.articles) {
//         console.log(newsInfo.articles);

// let textParent = document.createElement("div");
// // let textParent2 = document.createElement("div");
// textParent.setAttribute("id", "div1");
// // textParent2.setAttribute("id", "par2");

// textParent.innerHTML = newsObj.title;
// textParent.innerHTML = newsObj.intro;
// displayNews.appendChild(textParent);
// displayNews.appendChild(textParent); //add line breaks between the text

// let pix = document.createElement("img");
// pix.setAttribute("id", "pic");
// pix.src = newsObj.image_url;
// displayNews.appendChild(pix);

//         // resize image:
//         // let resize = document.getElementById("div1");
//         // resize.height = 100;
//         // resize.width = 100;
//       }
//     });
//   });
// })();

// function setNewImg() { }
// console.log(setNewImg);
// function setOldImg() { }


import axios from "axios"

const BASE_URL = 'https://api.jikan.moe/v3';
let page = 1;


function getNews() {
  axios.get(`https://api.jikan.moe/v3/anime/1/news`)
    .then(function (response) {
      // handle success
      console.log(response);
      let newsObj = response.data.articles;
      console.log(newsObj.length)
      let displayNews = document.getElementById("newsContent"); //grab this element from html
      for (let i = 0; i < newsObj.length; i++) {

        let title = document.createElement("p")
        title.innerHTML = newsObj[i].title;
        displayNews.appendChild(title);

        let pix = document.createElement("img");
        pix.setAttribute("id", "pic");
        pix.src = newsObj[i].image_url;
        displayNews.appendChild(pix);

        let textParent = document.createElement("div");
        // let textParent2 = document.createElement("div");
        textParent.setAttribute("id", "div1");
        // textParent2.setAttribute("id", "par2");


        textParent.innerHTML = newsObj[i].intro;
        displayNews.appendChild(textParent); //add line breaks between the text


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

window.addEventListener("load", function () { getNews() })