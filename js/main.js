let buttonSh = document.querySelector(".buttonBars");

let show = document.querySelector(".navbar");

let remove = document.querySelector(".fa-x")

buttonSh.addEventListener("click", () => {
    show.classList.add("show-nav")
})

remove.addEventListener("click", () => {
    show.classList.remove("show-nav")
})

let header = document.querySelector("header");
let fixedCon = document.querySelector("header .container");


window.addEventListener("scroll", () => {
    if (this.scrollY >= 500) {
        header.classList.add("fixedHeader");
        fixedCon.classList.add("fixedCon");
    } else {
        header.classList.remove("fixedHeader");
        fixedCon.classList.remove("fixedCon");
    }
})
