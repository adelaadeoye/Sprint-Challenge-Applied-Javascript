// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
//<div class="card">
// <div class="headline">{Headline of article}</div>
////<div class="author">
//  <div class="img-container">
//    <img src={url of authors image} />
//  </div>
//  <span>By {authors name}</span>
//</div>
//</div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardsContainer = document.querySelector('.cards-container');

var heeadline, auuthor, authorPic;
axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {

        // console.log(response.data.articles);
        let arti = [];
        const art = response.data.articles;
        var result = Object.keys(art).map(function(key) {
            return [String(key), art[key]];
        });
        result.forEach(element => {
            // console.log(element[1]);
            arti = element[1]
            artiType = element[0];
            // console.log(artiType);
            // console.log("sdas", arti.length);
            arti.forEach(item => {
                heeadline = item.headline;
                auuthor = item.authorName;
                authorPic = item.authorPhoto;
                // console.log(heeadline)
                // console.log(auuthor)
                // console.log(authorPic)
                cardComponet(heeadline, authorPic, auuthor);


            })

        });

        // response.data.articles.javascript[0].headline;
        // const obj = response.data.articles;
        // var result = Object.keys(obj).map(function(key) {
        //     return [obj[key]];
        // });

        // console.log((Array));
    })
    .catch(error => {
        console.log("The data was not returned", error);
    });

function cardComponet(headdLine, authorImg, authorNAme) {
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
    headlineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    imgContainerDiv.classList.add('img-container');

    //Content
    headlineDiv.textContent = headdLine;
    imgHolder.src = authorImg;
    span.textContent = ("By ", authorNAme);

    //Structer
    imgContainerDiv.appendChild(imgHolder);
    authorDiv.appendChild(imgContainerDiv);
    authorDiv.appendChild(span);
    cardDiv.appendChild(headlineDiv);
    cardDiv.appendChild(authorDiv);
    cardsContainer.appendChild(cardDiv)
    return cardDiv;
}