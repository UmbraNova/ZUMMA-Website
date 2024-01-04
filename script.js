const menu = document.querySelector("#mobileMenu")
const menuLinks = document.querySelector(".navbarMenu")

menu.addEventListener("click", function() {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
})

document.getElementById("navbarLogo").onclick=function() {
    document.getElementById("navbarLogo").innerHTML="Wow!"
    var paragraph = document.getElementById("test");
    paragraph.style.color = "red";
    paragraph.style.fontSize = "50px";

    options = ["or maybe THIS?", "watch THAT!!!"];
    paragraph.innerHTML = options[0];

    setTimeout(() => { paragraph.innerHTML = options[0] }, 2000);
    paragraph.innerHTML = options[1];
}

// Shift + Alt + Down Arrow -> to copy a row in VSCode