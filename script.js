
console.log("Script loaded and executing");


console.log('Script loaded');

// Question Clicker
document.querySelectorAll(".question").forEach((question) => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        const rotate = question.querySelector(".showAnswer");
        if (answer && rotate) {
            answer.classList.toggle("active");
            rotate.classList.toggle("active");
        }
    });
});

// Page 2 Fade-in
const rightElements = document.querySelectorAll(".page-2-right div");
if (rightElements.length > 0) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                entry.target.style.opacity = entry.isIntersecting ? "1" : "0";
            });
        },
        { threshold: 0.5 }
    );

    rightElements.forEach((element) => observer.observe(element));
}

// Nav Mobile
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".fa-bars");
    const xIcon = document.querySelector(".fa-xmark");
    const mobileNav = document.querySelector(".navMobile");
    const mobileLinks = document.querySelectorAll(".mobileLinks");

    if (hamburger) {
        hamburger.addEventListener("click", () => {
            console.log("Hamburger clicked!");
            mobileNav?.classList.toggle("navActive");
            mobileNav?.classList.toggle("navHidden");
        });
    } else {
        console.log("Hamburger does not exist in the DOM");
    }

    if (xIcon) {
        xIcon.addEventListener("click", () => {
            mobileNav?.classList.toggle("navActive");
            mobileNav?.classList.toggle("navHidden");
        });
    }

    mobileLinks.forEach((link) => {
        link.addEventListener("click", () => {
            mobileNav?.classList.toggle("navActive");
            mobileNav?.classList.toggle("navHidden");
        });
    });
});

// Share Buttons
const shareBtn = document.querySelector(".shareButton");
const socialBox = document.querySelector(".shareInfo");
const closeShare = document.querySelector(".closeShare");

if (shareBtn) {
    shareBtn.addEventListener("click", () => {
        if (navigator.share) {
            navigator
                .share({
                    title: "Webspansion",
                    text: "Check out Webspansion! They make free websites for small businesses, nonprofits, and anyone in need!",
                    url: "https://getwebspansion.org",
                })
                .then(() => console.log("Successfully Shared"))
                .catch((error) => console.log("Error Sharing", error));
        } else {
            console.log("Navigator sharing not supported, toggling social box.");
            socialBox?.classList.toggle("shareActive");
        }
    });
} else {
    console.log("Share button is not found in the DOM.");
}

if (closeShare) {
    closeShare.addEventListener("click", () => {
        socialBox?.classList.remove("shareActive");
    });
}

// Back to Top
const backToTop = document.querySelector(".backToTop");
if (backToTop) {
    window.addEventListener("scroll", () => {
        backToTop.classList.toggle("backToTopActive", window.scrollY > 100);
    });
}

// Mouse Movement Tool
document.addEventListener("DOMContentLoaded", () => {
    const image = document.querySelector(".mainImage");
    const imageDiv = document.querySelector(".mainImageDiv");

    if (image && imageDiv) {
        imageDiv.addEventListener("mousemove", (e) => {
            const { width, height, left, top } = image.getBoundingClientRect();
            const xMove = e.clientX - (left + width / 2);
            const yMove = e.clientY - (top + height / 2);

            const rotateY = (xMove / width) * 35;
            const rotateX = -(yMove / height) * 35;

            image.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
        });

        imageDiv.addEventListener("mouseleave", () => {
            image.style.transform = "";
        });
    }
});

// Intersection Observer for "Learn More" Blocks
const learnMore = document.querySelector(".learnMore");
const blocks = document.querySelectorAll(".learnMoreBlocks");
const reallyFree = document.querySelector(".reallyFree");

if (learnMore) {
    const observerBlocks = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                blocks.forEach((block) => block.classList.add("active"));
                reallyFree?.classList.add("active");
                observerBlocks.unobserve(learnMore);
            }
        });
    });

    observerBlocks.observe(learnMore);
}

// Intersection Observer for Blogs
const page6 = document.querySelector(".page-6");
const blogs = document.querySelectorAll(".blogsContainer");
const page6header = document.querySelector(".page6h2");

if (page6) {
    const observeBlogs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                blogs.forEach((blog) => blog.classList.add("active"));
                page6header?.classList.add("active");
                observeBlogs.unobserve(page6);
            }
        });
    });

    observeBlogs.observe(page6);
}






// Templating Headers, Contact Page, Footer
class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header id="header">
            <nav class="navDesktop">
                <div class="nav-left">
                    <a href="index.html"><img src="Images/Group 70.png" class="navImage" alt="Webspansion Logo"></a>
                </div>
                <div class="navBars">
                    <i class="fa-solid fa-bars navIcons hamburger"></i>
                </div>
                <div class="nav-right">
                    <a href="index.html#learnMore"> <button class="moreBtn">Learn More</button> 
                    <a href="index.html#contactPage"> 
                        <button class="startBtn buttonType1">
                            <span><svg id='Arrow_24' width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><rect width='24' height='24' stroke='none' opacity='0'/>
                                <g transform="matrix(0.77 0 0 0.77 12 12)" >
                                <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill-rule: nonzero; opacity: 1;" transform=" translate(-15.04, -15)" d="M 18.103516 6.9355469 C 17.920891 6.9164219 17.733047 6.94725 17.560547 7.03125 C 17.217547 7.19825 17 7.5476875 17 7.9296875 L 17 11.998047 L 4 11.998047 C 2.895 11.998047 2 12.893047 2 13.998047 L 2 15.998047 C 2 17.103047 2.895 17.998047 4 17.998047 L 17 17.998047 L 17 22.070312 C 17 22.453312 17.217547 22.80175 17.560547 22.96875 C 17.700547 23.03775 17.851 23.070312 18 23.070312 C 18.219 23.070313 18.436234 23.000328 18.615234 22.861328 L 27.685547 15.789062 C 27.928547 15.599063 28.070312 15.310953 28.070312 15.001953 C 28.070312 14.692953 27.928547 14.401891 27.685547 14.212891 L 18.615234 7.140625 C 18.464234 7.023125 18.286141 6.9546719 18.103516 6.9355469 z" stroke-linecap="round" />
                                </g>
                                </svg>
                            </span>                       
                            <p>Get Started!</p>
                        </button> 
                    </a>
                    </a>
                </div>
            </nav>
            <nav class="navMobile navHidden">
                <div class="navMobileLinks">
                    <a href="index.html"><img src="Images/Group 70.png" class="navImage navMobileImage" alt="Webspansion Logo"></a>
                    <a href="index.html#contactPage" class="mobileLinks" ><button>Get Started!</button></a>
                    <a href="index.html#learnMore" class="mobileLinks" ><button>Learn More</button></a>
                    <a href="index.html#portfolioPage" class="mobileLinks" ><button>Past Projects</button></a>
                    <a href="index.html#blogsPage" class="mobileLinks" ><button>Blogs (coming soon) </button></a>
                    <i class="fa-solid fa-xmark navIcons"></i>
                </div>
            </nav>
        </header>`;
    }
}




class SpecialContact extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section id="contactPage" class="contactPage">
            <img  class="contactPage-background" src="Images/contactFormBackground.png" alt="">
            <div class="contactPage-inner">
                <div class="contactPage-left">
                    <h2>Making a website is complicated</h2>
                    <h3>Let <span>US</span> take care of that</h3>
                    <img src="Images/contactFormImage.png" alt="">
                </div>
                <form action="https://api.web3forms.com/submit" method="POST" class="contactPage-right">
                    <input type="hidden" name="access_key" value="420e5a03-63a9-46dc-820e-dcf4bc9736dd">
                    <h3>Get in touch</h3>
                    <input type="text" name="name" placeholder="Name*" class="contactInputs" required>
                    <input type="email" name="email" placeholder="Email*" class="contactInputs" required>
                    <input type="tel" name="phone" placeholder="Phone Number" class="contactInputs" >
                    <textarea type="text" name="message" placeholder="Leave a message*" class="contactInputs" required ></textarea>
                    <button class="contactPage-submit">Submit</button>
                    <p class="legalWarning">By clicking "Submit", you agree to Webspansion's <span><a href="Terms-of-Service.html">Terms</a></span> and accept our <span><a href="Privacy-Policy.html">Privacy Policy</a></span>.</p>
                </form>
            </div>
        </section>`;
    }
}


class SpecialFooter extends HTMLElement {
    
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="footerTop">
                <div class="footerTopLeft">
                    <a href="index.html#header">
                        <img class="footerImage" src="Images/logoType1.png" alt="Webspansion Logo">
                    </a>
                    <p>Expanding your online presence,<br> one free website at a time.</p>
                    <div class="socialIcons">
                        <a href="https://www.tiktok.com/@webspansion" target="_blank" aria-label="TikTok">
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <title>TikTok</title>
                                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/webspansion/" target="_blank" aria-label="Instagram">
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <title>Instagram</title>
                                <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/>
                            </svg>
                        </a>
                        <a href="mailto:help@getwebspansion.org" target="_blank" aria-label="Email">
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <title>Gmail</title>
                                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="footerTopRight">
                    <script type="text/javascript" src="https://storage.ko-fi.com/cdn/widget/Widget_2.js"></script>
                    <script type="text/javascript">
                        kofiwidget2.init('Support Me on Ko-fi', '#146ef5', 'P5P314IIOF');
                        kofiwidget2.draw();
                    </script>
                </div>
            </div>
            <hr class="footerHr">
            <div class="footerBottom">
                <p>&#169; 2024 Webspansion</p>
                <p>Designed and developed by 
                    <span class="ashmitLink">
                        <a href="Ashmit-Bohora.html">Ashmit Bohora</a>
                    </span>
                </p>
                <div class="footerLegal">
                    <a href="Privacy-Policy.html">Privacy Policy</a>
                    <a href="Terms-of-Service.html">Terms of Service</a>
                </div>
            </div>
        </footer>`;

    }
}


customElements.define('special-header', SpecialHeader);
customElements.define('special-contact', SpecialContact);
customElements.define('special-footer', SpecialFooter);



/*     
<special-header></special-header>
<special-contact></special-contact>
<special-footer></special-footer>

*/

















// Templating Headers, Contact Page, Footer for Case Studies
class SpecialHeaderCaseStudies extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header id="header">
        <nav class="navDesktop">
            <div class="nav-left">
                <a href="../index.html">
                    <img src="../Images/Group 70.png" class="navImage" alt="Webspansion Logo">
                </a>
            </div>
            <div class="navBars">
                <i class="fa-solid fa-bars navIcons hamburger"></i>
            </div>
            <div class="nav-right">
                <a href="../index.html#learnMore" class="navLink">
                    <button class="moreBtn">Learn More</button>
                </a>
                <a href="../index.html#contactPage" class="navLink">
                    <button class="startBtn buttonType1">
                        <span>
                            <svg id='Arrow_24' width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>
                                <rect width='24' height='24' stroke='none' opacity='0'/>
                                <g transform="matrix(0.77 0 0 0.77 12 12)">
                                    <path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill-rule: nonzero; opacity: 1;" transform=" translate(-15.04, -15)" d="M 18.103516 6.9355469 C 17.920891 6.9164219 17.733047 6.94725 17.560547 7.03125 C 17.217547 7.19825 17 7.5476875 17 7.9296875 L 17 11.998047 L 4 11.998047 C 2.895 11.998047 2 12.893047 2 13.998047 L 2 15.998047 C 2 17.103047 2.895 17.998047 4 17.998047 L 17 17.998047 L 17 22.070312 C 17 22.453312 17.217547 22.80175 17.560547 22.96875 C 17.700547 23.03775 17.851 23.070312 18 23.070312 C 18.219 23.070313 18.436234 23.000328 18.615234 22.861328 L 27.685547 15.789062 C 27.928547 15.599063 28.070312 15.310953 28.070312 15.001953 C 28.070312 14.692953 27.928547 14.401891 27.685547 14.212891 L 18.615234 7.140625 C 18.464234 7.023125 18.286141 6.9546719 18.103516 6.9355469 z" stroke-linecap="round" />
                                </g>
                            </svg>
                        </span>
                        <p>Get Started!</p>
                    </button>
                </a>
            </div>
        </nav>
        <nav class="navMobile navHidden">
            <div class="navMobileLinks">
                <a href="../index.html">
                    <img src="../Images/Group 70.png" class="navImage navMobileImage" alt="Webspansion Logo">
                </a>
                <a href="../index.html#contactPage" class="mobileLinks"><button>Get Started!</button></a>
                <a href="../index.html#learnMore" class="mobileLinks"><button>Learn More</button></a>
                <a href="../index.html#portfolioPage" class="mobileLinks" ><button>Past Projects</button></a>
                <a href="../index.html#blogsPage" class="mobileLinks" ><button>Blogs (coming soon) </button></a>
                <i class="fa-solid fa-xmark navIcons"></i>
            </div>
        </nav>
        </header>`;
    }
}

class SpecialContactCaseStudies extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section id="contactPage" class="contactPage">
            <img class="contactPage-background" src="../Images/contactFormBackground.png" alt="Contact form background">
            <div class="contactPage-inner">
                <div class="contactPage-left">
                    <h2>Making a website is complicated</h2>
                    <h3>Let <span>US</span> take care of that</h3>
                    <img src="../Images/contactFormImage.png" alt="Illustration for contact form">
                </div>
                <form action="https://api.web3forms.com/submit" method="POST" class="contactPage-right">
                    <input type="hidden" name="access_key" value="420e5a03-63a9-46dc-820e-dcf4bc9736dd">
                    <h3>Get in touch</h3>
                    <input type="text" name="name" placeholder="Name*" class="contactInputs" required>
                    <input type="email" name="email" placeholder="Email*" class="contactInputs" required>
                    <input type="tel" name="phone" placeholder="Phone Number" class="contactInputs">
                    <textarea type="text" name="message" placeholder="Leave a message*" class="contactInputs" required></textarea>
                    <button class="contactPage-submit">Submit</button>
                    <p class="legalWarning">
                        By clicking "Submit", you agree to Webspansion's 
                        <span><a href="../Terms-of-Service.html">Terms</a></span> and accept our 
                        <span><a href="../Privacy-Policy.html">Privacy Policy</a></span>.
                    </p>
                </form>
            </div>
        </section>`;
    }
}

class SpecialFooterCaseStudies extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="footerTop">
                <div class="footerTopLeft">
                    <a href="../index.html#header">
                        <img class="footerImage" src="../Images/logoType1.png" alt="Webspansion Logo">
                    </a>
                    <p>Expanding your online presence,<br> one free website at a time.</p>
                    <div class="socialIcons">
                        <a href="https://www.tiktok.com/@webspansion" target="_blank" aria-label="TikTok">
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <title>TikTok</title>
                                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/webspansion/" target="_blank" aria-label="Instagram">
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <title>Instagram</title>
                                <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/>
                            </svg>
                        </a>
                        <a href="mailto:help@getwebspansion.org" target="_blank" aria-label="Email">
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <title>Gmail</title>
                                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="footerTopRight">
                    <script type="text/javascript" src="https://storage.ko-fi.com/cdn/widget/Widget_2.js"></script>
                    <script type="text/javascript">
                        kofiwidget2.init('Support Me on Ko-fi', '#146ef5', 'P5P314IIOF');
                        kofiwidget2.draw();
                    </script>
                </div>
            </div>
            <hr class="footerHr">
            <div class="footerBottom">
                <p>&#169; 2024 Webspansion</p>
                <p>Designed and developed by 
                    <span class="ashmitLink">
                        <a href="../Ashmit-Bohora.html">Ashmit Bohora</a>
                    </span>
                </p>
                <div class="footerLegal">
                    <a href="../Privacy-Policy.html">Privacy Policy</a>
                    <a href="../Terms-of-Service.html">Terms of Service</a>
                </div>
            </div>
        </footer>`;
    }
}

customElements.define('special-header-casestudies', SpecialHeaderCaseStudies);
customElements.define('special-contact-casestudies', SpecialContactCaseStudies);
customElements.define('special-footer-casestudies', SpecialFooterCaseStudies);


/*
    <special-header-casestudies></special-header-casestudies>
    <special-contact-casestudies></special-contact-casestudies>
    <special-footer-casestudies></special-footer-casestudies>
*/










document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded");

    const footerCaseStudies = document.querySelector('special-footer-casestudies');
    const footerDefault = document.querySelector('special-footer');

    console.log("Case Studies Footer in DOM:", footerCaseStudies);
    console.log("Default Footer in DOM:", footerDefault);

    if (!footerCaseStudies && !footerDefault) {
        console.log("Neither footer exists, manually creating Case Studies Footer");
        const newFooter = document.createElement('special-footer-casestudies');
        document.body.appendChild(newFooter);
    } else {
        console.log("Footer already exists in the DOM");
    }
});
