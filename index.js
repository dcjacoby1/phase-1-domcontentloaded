// Your code goes here
//arrow format
//adds event listener for page loading
document.addEventListener("DOMContentLoaded", () => {
    //grabs text field and changes the content
    document.querySelector('#text').textContent = "This is really cool!"
  })
  //could be done with defer in html tag for JS <script>
  //<script src="index.js" defer></script>


// function format:
//   document.addEventListener("DOMContentLoaded", function() {
//     document.querySelector('#text').textContent = "This is really cool!"
//   })