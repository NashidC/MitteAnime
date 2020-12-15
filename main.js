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
        let newsParent = document.createElement("div"); // parent elements
        let imgNews = document.createElement("div"); //parent elements, this div will be img
        imgNews.innerHTML = newsObj.articles;
        newsParent.innerHTML = newsObj.title;
        newsParent.innerHTML = newsObj.intro;
        newsParent.appendChild(imgNews);

        let img2 = document.createElement("img");
        img2.src = newsObj.image_url;

        newsParent.appendChild(img2);

        displayNews.appendChild(newsParent);

        // imgNews.innerHTML = newsInfo.image_url;
        // newsParent.appendChild(imgNews); // setting my value
        // displayNews.appendChild(newsParent); //Here I am pushing pasting the values to the new div inside of newsContent
      }
    });
  });
})();
