// variables calling for css selectors
const menu = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");
const hidden = document.querySelectorAll(".hiddens");
const hiddenLogo = document.querySelector(".hiddensLogo");
const hiddenSearch = document.querySelector(".hiddensSearch");
const hiddenLogout = document.querySelector(".hiddensLogout");
const main = document.querySelector("main");
const logo = document.querySelector("section");
const logoutIcon = document.querySelector(".logoutIcon");

// click event to call function
menu.addEventListener("click", sidebarToggle)

// change sidebar from close to open and vice versa
function sidebarToggle(){
    if(sidebar.style["width"] == "5.5vw"){
        sidebar.style["width"] = "18vw";
        menu.style.animation = "menuMovement 1s forwards"
        logoutIcon.style.animation = "menuMovement 1s forwards"
        show();
        cssAlteration();
    } else {
        sidebar.style["width"] = "5.5vw";
        menu.style.animation = "menuMovementReturn 0.5s forwards"
        hiddenLogo.setAttribute("hidden", true);
        hiddenSearch.setAttribute("hidden", true);
        hiddenLogout.setAttribute("hidden", true);
        logoutIcon.style.animation = "menuMovementReturn 0.5s forwards"
        setTimeout(function hide(){
            for(let i=0;i<hidden.length; i++){
                hidden[i].setAttribute("hidden", true)
            }
        }, 500);
        cssReturn();
    }
}

// remove the hidden atribute from html tags so they show
function show(){
    for(let i=0;i<hidden.length; i++){
        hidden[i].removeAttribute("hidden") //add the animation to the tags
    }
}

// add the hidden tags back


// change que css of some tags to better look with open sidebar
function cssAlteration(){
    main.style.alignItems = "flex-start";
    main.style.marginLeft = "4vw";
    for(let i=0;i<hidden.length; i++){
        hidden[i].style.animation = "appear 0.5s forwards"
    }
}

// return the css to how it was when closed
function cssReturn(){
    setTimeout(() => {
        main.style.alignItems = "center";
        main.style.marginLeft = "0";
    }, 500);
    for(let i=0; i<hidden.length; i++){
        hidden[i].style.animation = "disappear 0.3s forwards"
    }
}