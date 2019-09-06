// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component
const headerContainer = document.querySelector('.header-container');

function Header() {
    //create elements

    const
        headerDiv = document.createElement('div'),
        spanDate = document.createElement('span'),
        heading = document.createElement('h1'),
        spanTemp = document.createElement('span');


    //Class

    headerDiv.classList.add('header');
    spanDate.classList.add('date');
    spanTemp.classList.add('temp');


    //Content
    spanDate.textContent = "SMARCH 28, 2019";
    heading.textContent = "Lambda Times";
    spanTemp.textContent = "98°";


    //structure
    headerDiv.appendChild(spanDate);
    headerDiv.appendChild(heading);
    headerDiv.appendChild(spanTemp);
    headerContainer.appendChild(headerDiv);


    return headerDiv;
}
Header();