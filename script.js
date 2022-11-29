// variables calling for css selectors
const menu = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");
const hidden = document.querySelectorAll(".hiddens");
const main = document.querySelector("main");
const logo = document.querySelector("section");

// click event to call function
menu.addEventListener("click", sidebarToggle)

// change sidebar from close to open and vice versa
function sidebarToggle(){
    if(sidebar.style["width"] == "5.5vw"){
        sidebar.style["width"] = "18vw";
        menu.style.animation = "menuMovement 0.3s forwards"
        show();
        cssAlteration();
    } else {
        sidebar.style["width"] = "5.5vw";
        menu.style.animation = "menuMovementReturn 0.3s forwards"
        hide();
        cssReturn();
    }
}

// remove the hidden atribute from html tags so they show
function show(){
    for(let i=0;i<hidden.length; i++){
        hidden[i].removeAttribute("hidden")
        hidden[i].style.animation = "appear 0.3s forwards" //add the animation to the tags
    }
}

// add the hidden tags back
function hide(){
    for(let i=0;i<hidden.length; i++){
        hidden[i].setAttribute("hidden", true)
    }
}

// change que css of some tags to better look with open sidebar
function cssAlteration(){
    main.style.alignItems = "flex-start";
    main.style.marginLeft = "4vw";
}

// return the css to how it was when closed
function cssReturn(){
    main.style.alignItems = "center";
    main.style.marginLeft = "0";
}