var toggleNavStatus = false;
var toggleDropStatus = false;

function toggleNav() {
    var getNavBar = document.querySelector(".main-nav");
    var menuImage = document.querySelector(".menuImage")

    if(toggleNavStatus === false) {
        getNavBar.style.visibility = "visible";
        menuImage.src = "../IMG/Exit.svg"
        toggleNavStatus = true;
    }
    else if(toggleNavStatus === true) {
        getNavBar.style.visibility = "hidden";
        menuImage.src = "../IMG/menu.svg"
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

function openFile() {
    open("https://www.youtube.com")
}