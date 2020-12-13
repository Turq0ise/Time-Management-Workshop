var toggleNavStatus = false;
var toggleDropStatus = false;

function toggleNav() {
    var getNavBar = document.querySelector(".main-nav");
    var getMainHeader = document.querySelector(".fixed-bar");

    if(toggleNavStatus === false) {
        getNavBar.style.visibility = "visible";
        getMainHeader.style.visibility = "hidden";
        toggleNavStatus = true;
    }
    else if(toggleNavStatus === true) {
        getNavBar.style.visibility = "hidden";
        getMainHeader.style.visibility = "visible";
        toggleNavStatus = false;
    }
}

function toggleDrop() {
    var getDropDown = document.querySelector("#dropdown-menu-one");
    var getDropDownIcon = document.querySelector(".drop-down");

    if(toggleDropStatus === false) {
        getDropDown.style.display = "block";
        getDropDownIcon.style.transform = "scaleY(-1)"
        toggleDropStatus = true;
    }
    else if(toggleDropStatus === true) {
        getDropDown.style.display = "none";
        getDropDownIcon.style.transform = "scaleY(1)"
        toggleDropStatus = false;
    }
}

function comingSoon() {
    alert("Coming Soon!")
}

console.log(window.innerWidth);