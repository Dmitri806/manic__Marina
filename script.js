
const body = document.querySelector("body")
const burgerBtn = document.querySelector(".burger")
const header = document.querySelector(".header")

// alert(burgerBtn)

burgerBtn.addEventListener("click", () => {
    header.classList.toggle("header-mobile");
    body.classList.toggle("no-scroll");
})

