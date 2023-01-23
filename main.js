var menuList = document.getElementById("menuList");
var menuIconTop = document.getElementById("menuIconTop");
var menuIconMiddle = document.getElementById("menuIconMiddle");
var menuIconBottom = document.getElementById("menuIconBottom");
menuList.style.maxHeight = "0px";


function togglemenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "300px";
        menuIconBottom.style.transform = "rotate(45deg)";
        menuIconMiddle.style.display = "none";
        menuIconTop.style.transform = "rotate(-45deg)";


    }
    else {
        menuList.style.maxHeight = "0px";
    }

}