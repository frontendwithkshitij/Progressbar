function move() {
    let element = document.getElementById("myBar");
    let button = document.getElementById("myButton");
    let width = 0;
    button.disabled = true; // Disable the button
    let id = setInterval(function() {
        frame(element, width++, id, button);
    }, 10);
}

function frame(element, width, id, button) {
    if (width >= 100) {
        clearInterval(id);
        button.disabled = false; // Re-enable the button when done
    } else {
        element.style.width = width + '%';
        element.innerHTML = width + '%';
    }
}