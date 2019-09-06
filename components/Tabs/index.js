// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const topicElement = document.querySelector('.topics');
axios
    .get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response => {

        console.log(response);
        console.log(response.data.topics);
        let collectedTopic = response.data.topics;
        collectedTopic.forEach(element => {
            TabsComponent(element);
        });
    })
    .catch(error => {
        console.log("The data was not returned", error);
    });

function TabsComponent(topics) {
    //Create element
    const topicDiv = document.createElement('div');

    //classes
    topicDiv.classList.add('tab');

    //content
    topicDiv.textContent = topics;

    //Structur
    topicElement.appendChild(topicDiv);

    return topicDiv;
}