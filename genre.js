import axios from "axios"

const BASE_URL = "https://api.jikan.moe/v3";
let genre_id = 1;
let page = 1;
let genres = [
  {
    id: 1,
    name: "Action",
  },
  {
    id: 2,
    name: "Adventure",
  },
  {
    id: 3,
    name: "Cars",
  },
  {
    id: 4,
    name: "Comedy",
  },
  {
    id: 5,
    name: "Dementia",
  },
  {
    id: 6,
    name: "Demons",
  },
  {
    id: 7,
    name: "Mystery",
  },
  {
    id: 8,
    name: "Drama",
  },
  {
    id: 9,
    name: "Ecchi",
  },
  {
    id: 10,
    name: "Fantasy",
  },
  {
    id: 11,
    name: "Game",
  },
  {
    id: 12,
    name: "Hentai",
  },
  {
    id: 13,
    name: "Historical",
  },
  {
    id: 14,
    name: "Horror",
  },
  {
    id: 15,
    name: "Kids",
  },
  {
    id: 16,
    name: "Magic",
  },
  {
    id: 17,
    name: "Martial Arts",
  },
  {
    id: 18,
    name: "Mecha",
  },
  {
    id: 19,
    name: "Music",
  },
  {
    id: 20,
    name: "Parody",
  },
  {
    id: 21,
    name: "Samurai",
  },
  {
    id: 22,
    name: "Romance",
  },
  {
    id: 23,
    name: "School",
  },
  {
    id: 24,
    name: "Sci-Fi",
  },
  {
    id: 25,
    name: "Shoujo",
  },
  {
    id: 26,
    name: "Shoujo Ai",
  },
  {
    id: 27,
    name: "Shounen",
  },
  {
    id: 28,
    name: "Shounen Ai",
  },
  {
    id: 29,
    name: "Space",
  },
  {
    id: 30,
    name: "Sports",
  },
  {
    id: 31,
    name: "SuperPower",
  },
  {
    id: 32,
    name: "Vampire",
  },
  {
    id: 33,
    name: "Yaoi",
  },
  {
    id: 34,
    name: "Yuri",
  },
  {
    id: 35,
    name: "Harem",
  },
  {
    id: 36,
    name: "Slice of Life",
  },
  {
    id: 37,
    name: "Supernatural",
  },
  {
    id: 38,
    name: "Military",
  },
  {
    id: 39,
    name: "Police",
  },
  {
    id: 40,
    name: "Psychological",
  },
  {
    id: 41,
    name: "Thriller",
  },
  {
    id: 42,
    name: "Seinen",
  },
  {
    id: 43,
    name: "Josei",
  },
];
const clearHTML = () => {
  poster.innerHTML = "";
};
async function getGenres() {
  return await axios
    .get(`${BASE_URL}/genre/anime/${genre_id} `)
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}
const populateHTML = (response) => {
  let posterImg = response.data.anime;
  //O(n)
  for (let i = 0; i < posterImg.length; i++) {
    let parentElement = document.createElement("div");

    let display = document.getElementById("poster")
    let posterObj = posterImg[i].image_url;
    let title = posterImg[i].title;
    let newImg = document.createElement("img");
    newImg.setAttribute("src", posterObj);
    parentElement.appendChild(newImg);
    display.appendChild(parentElement)

    let newTitle = document.createElement("p");
    newTitle.setAttribute("class", "title");
    newTitle.textContent = title;
    parentElement.appendChild(newTitle);
  }
  //!come back to this
  //This needs to happen on load but also on change
};
const getNewAnimeByGenre = async () => {
  const response = await getGenres();
  clearHTML();
  console.log(response);
  populateHTML(response);
};
window.addEventListener("load", function () {
  getNewAnimeByGenre();
  //O(n)
  genres.forEach(function (genreType) {
    var option = document.createElement("option");
    option.value = genreType.id;
    option.innerHTML = genreType.name;
    selector.appendChild(option);
  });
  selector.onchange = function () {
    genre_id = this.value;
    getNewAnimeByGenre();
    console.log("success");
    console.log(genre_id);
  };
});