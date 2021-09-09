let selectElements = (selector) => document.querySelectorAll(selector);
let selectAnElement = (selector) => document.querySelector(selector);
let createAnElement = (elementType) => document.createElement(elementType);
let appendAChild = (theParent, theChild) => theParent.appendChild(theChild);

let createdDiv = createAnElement("div");
let createdImg = createAnElement("img");
let movieContainer = selectAnElement(".container");
let recentContainer = selectAnElement(".grid-container");
let currentPicture = selectAnElement(".current");
let recent1 = selectAnElement(".pic1")
let recent2 = selectAnElement(".pic2")
let recent3 = selectAnElement(".pic3")


// movieContainer.appendChild(createdDiv);
// currentPicture.appendChild(createdImg);
appendAChild(movieContainer, createdDiv);
appendAChild(recentContainer, createdDiv);
appendAChild(currentPicture, createdImg);
appendAChild(currentPicture, createdImg);




let handleSubmit = (e) => {
  e.preventDefault();
  console.log(e)
  // console.log(e.target[1])
  // console.log(e.target.children)


  // What to do next:
  // 1. Clean up your unneeded code
  // 2. Update the api call to also accept the film type selection
  // 3. Update your DOM logic so that it clears out the old data from the Current Search Box
  // 4. Stretch Goal: Try and redesign so that you are able to keep track of the previously searched film
  // ie: We still need to render the three previously searched films
  // Hint: One approach might be to store all api data in a separate array and then render each item/index in the array

  console.log(e.target.children[0].value)
  console.log(e.target.children[1].value)

  let userProvidedFilmTitle = e.target.children[0].value

  const URL = `http://www.omdbapi.com/?t=${userProvidedFilmTitle}&apikey=aed557e4`;

  console.log(URL)
  getData(URL);

}

let grabForm = document.querySelector('.searchfield')
grabForm.addEventListener('submit', handleSubmit)

console.log(grabForm)

let filmData = [
  // {1st set of data},  
  // {2nd set of data},
  // {3rd set of data},
  // {4th set of data},
  // {5th set of data},
]

let getData = async (url) => {
  let response = await fetch(url);
  let data = await response.json();

  displayCurrentFilm(data)
};

displayCurrentFilm = (apiData) => {
  // console.log(apiData)
  let heading = document.createElement("h1");
  let plot = document.createElement("p");
  let ratings = document.createElement("h5");
  let released = document.createElement("time");

  createdImg.src = apiData.Poster;
  heading.innerHTML = apiData.Title;
  plot.innerHTML = apiData.Plot;
  released.innerHTML = `Release Date: ${apiData.Released}`;
  ratings.innerHTML = `Rating: ${apiData.Ratings[0].Value}`;


  appendAChild(currentPicture, heading);
  appendAChild(currentPicture, plot);
  appendAChild(currentPicture, released);
  appendAChild(currentPicture, ratings);
}
