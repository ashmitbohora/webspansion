

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

const mobileLinks = document.querySelectorAll(".mobileLinks")

hamburger.addEventListener("click",() => {

    mobileNav.classList.toggle("navActive")
    mobileNav.classList.toggle("navHidden")

});

xIcon.addEventListener("click",() => {

    mobileNav.classList.toggle("navActive")
    mobileNav.classList.toggle("navHidden")

});

mobileLinks.forEach(a => {
    a.addEventListener("click", () => {

        mobileNav.classList.toggle("navActive");
        mobileNav.classList.toggle("navHidden");

    });
});




// Share buttons

const shareBtn = document.querySelector('.shareButton')
const socialBox = document.querySelector('.shareInfo')
const closeShare = document.querySelector('.closeShare')








shareBtn.addEventListener("click", () => {

    if (navigator.share){
        navigator.share({
            title: 'Webspansion',
            text: 'Check out Webspansion! They make free websites for small businesses, nonprofits, and anyone in need!',
            url: 'https://getwebspansion.org'
        })
        .then(() => {
            console.log("Successfully Shared");
        })
        .catch((error) => {
            console.log("Error Sharing", error)

        });
    }


    else {
        socialBox.classList.toggle("shareActive");
    }

});



closeShare.addEventListener("click", () => {

    socialBox.classList.remove("shareActive");

});





// Back to Top 


const backToTop = document.querySelector(".backToTop");


window.addEventListener("scroll",() => {

    if (window.scrollY > 100){
        backToTop.classList.add("backToTopActive");
    }
    else{
        backToTop.classList.remove("backToTopActive");
    }

});




// Mouse Movement Tool


document.addEventListener("DOMContentLoaded", () =>{

    const image = document.querySelector(".mainImage")

    image.addEventListener("mousemove", (e) => {
    
        const { width, height, left, top } = image.getBoundingClientRect();
        

        const xMove = e.clientX - (left + width / 2);
        const yMove = e.clientY - (top + height / 2);


        let rotateY = (xMove/ width) * 35;
        let rotateX = -(yMove/ height) * 35;


        image.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;   

    });
    
    image.addEventListener("mouseleave", () => {
    
        image.style.transform = "";
    
    });



});




// Add Intrersection Observer to the learn more blocks


const learnMore = document.querySelector(".learnMore")
const blocks = document.querySelectorAll(".learnMoreBlocks")
const reallyFree = document.querySelector(".reallyFree")

const observerBlocks = new IntersectionObserver ((entries) => {

    entries.forEach(entry => {
        if (entry.isIntersecting){
            blocks.forEach(block => {
                block.classList.add("active");
            });
            reallyFree.classList.add("active");
            observerBlocks.unobserve(learnMore);
        }
    });

});


// Start observing the learnMore element
observerBlocks.observe(learnMore);




const page6 = document.querySelector(".page-6")
const blogs = document.querySelectorAll(".blogsContainer")
const page6header = document.querySelector(".page6h2")


const observeBlogs = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if (entry.isIntersecting){
            blogs.forEach(blog => {
                blog.classList.add("active");
            });
            page6header.classList.add("active");
            observeBlogs.unobserve(page6);
        }
    });
});

observeBlogs.observe(page6);

