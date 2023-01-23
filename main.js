var menuList = document.getElementById("menuList");

menuList.style.maxHeight = "0px";


function togglemenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "300px";

    }
    else {
        menuList.style.maxHeight = "0px";
    }
}
const interestCohort = await document.interestCohort();
console.log('document.interestCohort():', interestCohort);
console.log(interestCohort.id);   // The interests cohort's number value, reflected visitor's interests
console.log(interestCohort.version);