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
appendAChild(recent1, createdImg);
appendAChild(recent2, createdImg);
appendAChild(recent3, createdImg);


const URL = "www.fetchcalldemo.com"; //omdb api

let getData = async (url) => {
  let response = await getData(url);
  let data = await response.json();
  console.log(data);
};
// getData(URL);

let allShows = {
  Title: "Guardians of the Galaxy Vol. 2",
  Year: "2017",
  Rated: "PG-13",
  Released: "05 May 2017",
  Runtime: "136 min",
  Genre: "Action, Adventure, Comedy",
  Director: "James Gunn",
  Writer: "James Gunn, Dan Abnett, Andy Lanning",
  Actors: "Chris Pratt, Zoe Saldana, Dave Bautista",
  Plot: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
  Language: "English",
  Country: "United States",
  Awards: "Nominated for 1 Oscar. 15 wins & 58 nominations total",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
  Ratings: [
    {
      Source: "Internet Movie Database",
      Value: "7.6/10",
    },
    {
      Source: "Rotten Tomatoes",
      Value: "85%",
    },
    {
      Source: "Metacritic",
      Value: "67/100",
    },
  ],
  Metascore: "67",
  imdbRating: "7.6",
  imdbVotes: "593,526",
  imdbID: "tt3896198",
  Type: "movie",
  DVD: "10 Jul 2017",
  BoxOffice: "$389,813,101",
  Production: "Marvel Studios, Walt Disney Pictures",
  Website: "N/A",
  Response: "True",
};

//I am trying to show a poster from a url holding API data.
//It is located in poster.
//Located in allShows.Poster
// I need to use the image element I've already created
// I have to fill the image src attribute with allShows.Poster
//?? Figure out how to add a src with a DOM ??
// I dont know what to do next
currentFullDisplay = () => {
  displayCurrentPic = () => {
    console.log(allShows.Poster);
    createdImg.src = allShows.Poster;
    // allShows.Poster.classList.add("currentPicture")
  };
  displayCurrentPic();

  displayCurrentTitle = (title) => {
    console.log(allShows.Title);
    let heading = document.createElement("h1");
    heading.innerHTML = allShows.Title;
    appendAChild(currentPicture, heading);
  };
  displayCurrentTitle();

  displayCurrentPlot = (description) => {
    console.log(allShows.Plot);
    let plot = document.createElement("p");
    plot.innerHTML = allShows.Plot;
    appendAChild(currentPicture, plot);
  };
  displayCurrentPlot();

  displayCurrentRelease = (releaseDate) => {
    console.log(allShows.Released);
    let released = document.createElement("time");
    released.innerHTML = `Release Date: ${allShows.Released}`;
    appendAChild(currentPicture, released);
  };
  displayCurrentRelease();

  displayCurrentRating = (rating) => {
    console.log(allShows.Ratings);
    let ratings = document.createElement("h5");
    ratings.innerHTML = `Rating: ${allShows.Ratings[1]}`;
    appendAChild(currentPicture, ratings);
  };
  displayCurrentRating();
};
currentFullDisplay();

allRecentDisplays = () => {
//I am trying to pass all of the information from current picture to the first pic1 last 3 searched
//All the info is located in currentFullDisplay function
// I have all the info for current and could possibly run the same type of code
//I believe it would be a if statement to where if someone searches and the search goes through and there isnt an error, then push the current info to pic1, and the same for pic2 and pic3.
  //Figure out how to send the same info to pic1 class
  displayLastPic1 = () => {
    console.log(allShows.Poster);
    
    createdImg.src = allShows.Poster;
    
    // allShows.Poster.classList.add("currentPicture")
  };
  displayLastPic1();

}
allRecentDisplays();