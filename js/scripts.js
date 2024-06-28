const header = document.getElementById("my-header");

header.addEventListener("mouseover", function() {
  header.style.backgroundColor = "red"; 
});

header.addEventListener("mouseout", function() {
  header.style.backgroundColor = "lightgray"; 
});
