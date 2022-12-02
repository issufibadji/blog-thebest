/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 1500,
    reset: false,
})

sr.reveal(
    `.blog-data, .blog-img,
        .back-data, .back-img,
        .front-content,
        .menu-content,
        .card,
       .contact-button,
        .footer-content`, {
        interval: 300,
    }
)