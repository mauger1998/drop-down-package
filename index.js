const menuButton = document.querySelector("#menuButton");
menuButtonIsClicked = false;

function dropDownMenu() {
    const dropDown = document.querySelector(".dropDown");
    if (menuButtonIsClicked == false) {
        
        dropDown.style.opacity = "1";
        menuButtonIsClicked = true;
    } else if (menuButtonIsClicked == true) {
        dropDown.style.opacity = 0;
        menuButtonIsClicked = false; 
    }
    
}


    
    



menuButton.addEventListener("click", () => {
    dropDownMenu()
})

module.exports.dropDownMenu = dropDownMenu;

