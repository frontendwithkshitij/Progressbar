function move(){
    let element = document.getElementById("myBar");
    let width = 0
    let id = setInterval(function() {
        frame(element, width++, id);
    }, 10);
    
}

function frame(element,width,id) {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      element.style.width = width + '%'; 
      element.innerHTML = width * 1  + '%';
    }
  }