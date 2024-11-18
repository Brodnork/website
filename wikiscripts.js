function togglePageContent() {
    var x = document.getElementById("sectionsContent");
    var y = document.getElementById("contentButton");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.innerHTML = "hide";
    } else {
      x.style.display = "none";
      y.innerHTML = "show";
    }
  } 

function search(){
    

    if(document.getElementById("searchBar").value.toLowerCase() == "help"){
        document.getElementById("searchBar").value = "No."; 
    }else{
        document.getElementById("searchBar").value = ""; 
    }; 
}

function searchEnter(){
    
    if(event.keyCode == 13) {
        search();
    }
}