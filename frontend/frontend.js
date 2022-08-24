/*
This is a promise of extracting the response body as JSON format from the server, 
and then, calss the populateDescription function  
*/
function processFetchedData(response) {
  const serverResponse = response.json();
  serverResponse.then(populateDescription);
}

// This function is to put description and references in html
function populateDescription(data) {
  document.getElementById("description").innerText = data.description;

  for (let i = 0; i < data.references.length; i++) {
    // Create an anchor element in html
    const anchor = document.createElement("a");
    anchor.href = data.references[i].url;
    anchor.innerText = data.references[i].text;

    // Create div element in html
    const div = document.createElement("div");

    // Append anchor to div
    div.appendChild(anchor);

    // Append div to body of html
    document.body.appendChild(div);
  }
}

/*
 This is the first line of code that will run >> the route "/random" is fetched in 
 that we get the random activity data, and then the function processFetchedData is called
 */
const pullRandomActivity = fetch("/random");

pullRandomActivity.then(processFetchedData);
