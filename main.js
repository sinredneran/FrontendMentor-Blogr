let navLists = document.querySelectorAll('.lists');
let navName = document.querySelectorAll('.listName');

for (let i = 0; i < navLists.length; i++) {
    navName[i].addEventListener('click', () => {
        navLists[i].classList.toggle('show');
    })
}

let burger = document.querySelector('.burger');
let nav = document.querySelector('.navigation');

burger.addEventListener('click', () => {
    var x = document.getElementById("myTopnav");
    burger.classList.toggle('close');
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
});