// bringing the info from api.js to main.js,
// Top() is a function now exectuing in mainJS
import Topapi from "./api";
// Line 5 is an anon function
(() => {
  window.addEventListener("load", () => {
    const topButton = document.getElementById("current");
    topButton.addEventListener("click", async () => {
      let apiData = await Topapi();
      console.log(apiData);
      let displayTop = document.getElementById("topContent"); //grab this element from html
      for (const animeObj of apiData.top) {
        //const in FOR of is = (i) "animeObj"
        // looping thru array of obj
        let parentElement = document.createElement("div"); //parent element created a new div
        let titleElement = document.createElement("div"); //parent element = new div
        titleElement.innerHTML = animeObj.title; // this line will add the element value
        parentElement.appendChild(titleElement); // while this line will push the value and make it availbe to the users eye.
        let img1 = document.createElement("img");
        img1.src = animeObj.image_url;
        parentElement.appendChild(img1);
        displayTop.appendChild(parentElement);
      }
    });
  });
})();

//_____________________________________________News Api______________________

import news from "./news";
(() => {
  window.addEventListener("load", () => {
    const newsButton = document.getElementById("news");
    newsButton.addEventListener("click", async () => {
      let newsInfo = await news();
      console.log(newsInfo);
      let displayNews = document.getElementById("newsContent"); // here i am grabbing the html ID newsContent
      //
      let remove = document.getElementById("topContent");
      remove.remove();
      // Line above removes background image on News
      for (const newsObj of newsInfo.articles) {
        console.log(newsInfo.articles);

        let textParent = document.createElement("div");
        // let textParent2 = document.createElement("div");
        textParent.setAttribute("id", "div1");
        // textParent2.setAttribute("id", "par2");

        textParent.innerHTML = newsObj.title;
        textParent.innerHTML = newsObj.intro;
        displayNews.appendChild(textParent);
        displayNews.appendChild(textParent); //add line breaks between the text

        let pix = document.createElement("img");
        pix.setAttribute("id", "pic");
        pix.src = newsObj.image_url;
        displayNews.appendChild(pix);

        // resize image:
        // let resize = document.getElementById("div1");
        // resize.height = 100;
        // resize.width = 100;
      }
    });
  });
})();

function setNewImg() {}
console.log(setNewImg);
function setOldImg() {}
