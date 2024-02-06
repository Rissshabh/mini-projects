const buttons = document.querySelectorAll('.button')

buttons.forEach( (btn) => {
  document.addEventListener('click', function(e) {
    if(e.target.id == "grey") {
      document.body.style.backgroundColor = e.target.id;
    } 
    if(e.target.id == "white") {
      document.body.style.backgroundColor = e.target.id;
    } 
    if(e.target.id == "blue") {
      document.body.style.backgroundColor = e.target.id;
    } 
    if(e.target.id == "yellow") {
      document.body.style.backgroundColor = e.target.id;
    } 
    if(e.target.id == "purple") {
      document.body.style.backgroundColor = e.target.id;
    } 
  })
} )

