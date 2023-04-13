let buttonSh = document.querySelector(".buttonBars");

let show = document.querySelector(".navbar");

let remove = document.querySelector(".fa-x")

buttonSh.addEventListener("click", () => {
    show.classList.add("show-nav")
})

remove.addEventListener("click", () => {
    show.classList.remove("show-nav")
})
