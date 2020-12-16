import axios from "axios"

const BASE_URL = 'https://api.jikan.moe/v3';
let genre_id = 1;
let page = 1;


function getGenres() {

  axios.get(`${BASE_URL}/genre/anime/${genre_id}/${page}`)
    .then(function (response) {
      // handle success
      console.log(response);
      let posterImg = response.data.anime;
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

      genres.forEach(function (genreType) {
        var option = document.createElement('option');
        option.value = genreType.id;
        option.innerHTML = genreType.name;
        selector.appendChild(option)
      })
      selector.onchange = function () {

        genre_id = this.value;
        getGenres();

        console.log("success")
        console.log(genre_id)
        // window.location.reload()
        selector.addEventListener('change', function () { getGenres() })

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



window.addEventListener("load", function () { getGenres() })



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
  }
];

