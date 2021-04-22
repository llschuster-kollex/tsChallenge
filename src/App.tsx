import React from "react";
import logo from "./logo.svg";
import "./App.css";

//////////////////////
// 1. Lets use JSON data from https://randomuser.me/api/?results=20
//    Log it to the console and explain what you are getting.
////////////
// 2. Create a component that handles data fetching and rendering of the names
////////////
// 3. Split the component so that one part is only UI
//    and the other is a custom hook which handles fetching and storing the data
////////////
// 4. We want to show more names. Create a load more button when clicked, it fetches
//    the the next pages by appending `&page=2`, `&page=3`, ... to the url and we display
//    more results on the page
////////////
// 5. Render the average age of all the users fetched so far.
////////////
// 6. How would you normally approach testing for what you have so far?
////////////
// 7. Write unit tests for the age logic. No need to use a library for it.
//    It only needs to print "PASS" or "FAIL" for each test to the console
//////////////////////

function App() {
  return (
    <div className="App">
      <p>Let's do it!</p>
    </div>
  );
}

export default App;
