

//function to show side menu
Array.from(document.querySelectorAll("#closeSideMenu")).forEach(showIcon)
Array.from(document.querySelectorAll("#openSideMenu")).forEach(hideIcon)
openSideMenu()
        function openSideMenu (){
            Array.from(document.querySelectorAll(".sideMenu")).forEach(toggleShow)
            Array.from(document.querySelectorAll("#openSideMenu")).forEach(toggleHide)
            Array.from(document.querySelectorAll("#closeSideMenu")).forEach(toggleHide)
            Array.from(document.querySelectorAll("#closeSideMenu")).forEach(showIcon)
            Array.from(document.querySelectorAll("#openSideMenu")).forEach(hideIcon)

        }

        function hideIcon(element){
            element.style.display = "none";
        }

        function showIcon(element){
            element.style.display = "block";
        }


        function toggleShow (element){
            element.style.display = "block";

        }

//function to hide side menu
        function closeSideMenu (){
            Array.from(document.querySelectorAll(".sideMenu")).forEach(toggleHide)
            Array.from(document.querySelectorAll("#openSideMenu")).forEach(toggleHide)
            Array.from(document.querySelectorAll("#closeSideMenu")).forEach(toggleHide)
            Array.from(document.querySelectorAll("#closeSideMenu")).forEach(hideIcon)
            Array.from(document.querySelectorAll("#openSideMenu")).forEach(showIcon)
        }

        function toggleHide (element){
            element.style.display = "none";
        }



Array.from(document.querySelectorAll(".jobPallet")).forEach(setHeight);
function setHeight (element){
    element.style.height = "50px";
}

    //this function works around the job pallets
   setHeight()
    function expandPallet(element){

        if (element.style.height === "50px"){
            element.style.height = "250px";
            element.firstChild.atyle.innerHTML = "-"
        }
        else {
            element.style.height = "50px";
            element.firstChild.innerHTML = "+"

        }
    }
   