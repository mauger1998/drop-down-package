## What is this

Change! Noone use this, theres a bug, im still new to packages

## Installation

npm install drop-down-package --save-dev


## How does this work

You will give your drop down a class of dropDown and give it an opacity of 0 so it is invisible. Then give your menu button a id of menuButton and create a variable called menuButtonIsClicked and set it to false. Then you simply call the dropDownMenu function on an event listener for the menuButton.

```
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
```