
const downPart = document.getElementById("downPart");
const addToCart = document.getElementById("add-el");
const addItems = document.getElementById("input-el");

function render(items) {

    const button = document.createElement("button");
    button.textContent = items; 
    button.id = "btn-el"; 
    
    button.addEventListener("click", function () {
        downPart.removeChild(button); 
    });
 
    downPart.appendChild(button);

    addItems.value = "";
}

addToCart.addEventListener("click", function () {
    let items = addItems.value.trim();
    if (items) { 
        render(items);
    }
});
