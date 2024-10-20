

//Question Clicker

const questions = document.querySelectorAll(".question");

questions.forEach( question => {
    question.addEventListener("click",() => {

        const answer = question.nextElementSibling;
        const rotate = question.querySelector(".showAnswer");

        answer.classList.toggle("active");
        rotate.classList.toggle("active");

    })
})



// Page 2 fade in


const stickyElement = document.querySelector(".free-sticky");
const rightElements = document.querySelectorAll(".page-2-right div");


let observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting){
            entry.target.style.opacity = "1";
        }
        else {
            entry.target.style.opacity = "0";
        }
    });
}, {
     threshold: 0.5
});


rightElements.forEach(element => {

    observer.observe(element);

});





// Nav Mobile

const hamburger = document.querySelector(".fa-bars");
const xIcon = document.querySelector(".fa-xmark");
const mobileNav = document.querySelector(".navMobile");

hamburger.addEventListener("click",() => {

    mobileNav.classList.toggle("navActive")
    mobileNav.classList.toggle("navHidden")

});

xIcon.addEventListener("click",() => {

    mobileNav.classList.toggle("navActive")
    mobileNav.classList.toggle("navHidden")

});





// Prallax effect


// let blogs = document.querySelectorAll(".blog");

// window.addEventListener("scroll",() =>{

//     let value = window.scrollY;

//     blogs.forEach((blog) => {

//         blog.style.transform = `translateY(${value * 0.16}px)`;
//     });

// });