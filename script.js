var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")

var addpopupbutton = document.getElementById("add-popup-button");


addpopupbutton.addEventListener("click",function() {
    
    popupoverlay.style.display = "block";

    popupbox.style.display = "block";


})



document.getElementById("cl-popup").addEventListener("click", function (e) {
    
e.preventDefault()
     popupoverlay.style.display = "none";

     popupbox.style.display = "none";




})


var container = document.querySelector(".container")

var addbook = document.getElementById("add-book")



addbook.addEventListener("click", function (e) {
    e.preventDefault()




    var title = document.getElementById("book-title-input").value;

    var author = document.getElementById("book-author-input").value;

    var desc = document.getElementById("book-desc-input").value;

    
    var div = document.createElement("div")
    div.setAttribute("class", "book-container" )
div.innerHTML=`<h2>${title}</h2>  <h5>${author}</h5> <p>${desc}</p>  <button onclick="deletebook(event)">Delete</button> `

    container.append(div)


     popupoverlay.style.display = "none";

    popupbox.style.display = "none";
    


     document.getElementById("book-title-input").value = "";
     document.getElementById("book-author-input").value = "";
     document.getElementById("book-desc-input").value = "";
    
    
    if (title === "" || author === "" || desc === "") {
      alert("Please fill out all fields!");
      return;
    }

    
})




function deletebook(event) {
    
    event.target.parentElement.remove();

}