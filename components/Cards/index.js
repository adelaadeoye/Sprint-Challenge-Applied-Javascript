// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {

        console.log(response.data.articles);
        // console.log(response.data.topics);
        // let collectedTopic = response.data.topics;
        // collectedTopic.forEach(element => {
        //     TabsComponent(element);
        // });
    })
    .catch(error => {
        console.log("The data was not returned", error);
    });

function cardComponet() {
    //create Element

    const
        cardDiv = document.createElement('div'),
        headlineDiv = document.createElement('div'),
        authorDiv = document.createElement('div'),
        imgContainerDiv = document.createElement('div'),
        imgHolder = document.createElement('img'),
        span = document.createElement('span');

    //Class
    cardDiv.classList.add('card');
    headlineDiv.classList('headline');
    authorDiv.classList('author');
    imgContainerDiv.classList('img-container');

    //Content

    //Structer
}