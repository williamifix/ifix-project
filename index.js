let pageOne = document.querySelector(".one");
let pageTwo = document.querySelector(".two");
let pageThree = document.querySelector(".three");
let pageFour = document.querySelector(".four");
let pageFive = document.querySelector(".five");
let pageSix = document.querySelector(".six");
let pageSeven = document.querySelector(".seven");


pageOne.className += " active";
pageTwo.className += " inactive";
pageThree.className += " inactive";
pageFour.className += " inactive";
pageFive.className += " inactive";
pageSix.className += " inactive";
pageSeven.className += " inactive";   

function makeActive(element){
    pageOne.className = "one";
    pageTwo.className = "two";
    pageThree.className = "three";
    pageFour.className = "four";
    pageFive.className = "five"; 
    pageSix.className = "six"; 
    pageSeven.className = "seven"; 
   
        if (element.id === pageOne.className){
            pageOne.className += " active";
            pageTwo.className += " inactive";
            pageThree.className += " inactive";
            pageFour.className += " inactive";
            pageFive.className += " inactive";
            pageSix.className += " inactive";
            pageSeven.className += " inactive";
        }
        else  if (element.id === pageTwo.className){
            pageOne.className += " inactive";
            pageTwo.className += " active";
            pageThree.className += " inactive";
            pageFour.className += " inactive";
            pageFive.className += " inactive";   
            pageSix.className += " inactive";
            pageSeven.className += " inactive";
        }
        else  if (element.id === pageThree.className){
            pageOne.className += " inactive";
            pageTwo.className += " inactive";
            pageThree.className += " active";
            pageFour.className += " inactive";
            pageFive.className += " inactive"; 
            pageSix.className += " inactive";
            pageSeven.className += " inactive";
        }
        else  if (element.id === pageFour.className){
            pageOne.className += " inactive";
            pageTwo.className += " inactive";
            pageThree.className += " inactive";
            pageFour.className += " active";
            pageFive.className += " inactive";  
            pageSix.className += " inactive";
            pageSeven.className += " inactive";
        }
        else  if (element.id === pageFive.className){
            pageOne.className += " inactive";
            pageTwo.className += " inactive";
            pageThree.className += " inactive";
            pageFour.className += " inactive";
            pageFive.className += " active";            
            pageSix.className += " inactive";
            pageSeven.className += " inactive";
        }
        else  if (element.id === pageSix.className){
            pageOne.className += " inactive";
            pageTwo.className += " inactive";
            pageThree.className += " inactive";
            pageFour.className += " inactive";
            pageFive.className += " inactive";            
            pageSix.className += " active";
            pageSeven.className += " inactive";
        }
        else  if (element.id === pageSeven.className){
            pageOne.className += " inactive";
            pageTwo.className += " inactive";
            pageThree.className += " inactive";
            pageFour.className += " inactive";
            pageFive.className += " inactive";            
            pageSix.className += " inactive";
            pageSeven.className += " active";
        }

}


      // let pageArray = [pageOne, pageTwo, pageThree, pageFour, pageFive];

        // for (let i =0; i < pageArray.length; i++){
        //     pageOne.className = "one";
        //     pageTwo.className = "two";
        //     pageThree.className = "three";
        //     pageFour.className = "four";
        //     pageFive.className = "five"; 
        //     pageArray = [pageOne, pageTwo, pageThree, pageFour, pageFive];
        //     if(element.id === pageArray[i]) {
        //         pageArray[i].className += " active";
        //         break;
        //     }
        //     else{
        //         pageArray[i].className += " inactive";
        //     }

        // }



        //this is the decriptions on the HowTo Page

 
        // function darkenSideMenuHead(){
        //     Array.from(document.querySelectorAll(".sideMenu")).forEach(darkenOnScroll)
            
            
        // }

        // function darkenOnScroll(element){
        //    Array.from(document.querySelectorAll("#sideMenuHead")).forEach(changeColor);
        // }
        // function changeColor(element){
        //     element.style.backgroundColor = "#00ffff";
        // }


    
//function to show side menu
Array.from(document.querySelectorAll("#closeSideMenu")).forEach(showIcon)
Array.from(document.querySelectorAll("#openSideMenu")).forEach(hideIcon)

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

        



    //this function works around the job pallets
    
    function expandPallet(element){
        if (element.style.height === "50px"){
            element.style.height = "200px";
            // element.firstChild.firstChild.firstChild.innerHTML = "-";
        }
        else {
            element.style.height = "50px";
            // element.firstChild.firstChild.firstChild.innerHTML = "-";

        }
    }
   


  