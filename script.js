// ===============================
// Mobile Menu
// ===============================

const navbar = document.querySelector(".navbar");
const navLinks = document.querySelector(".nav-links");


// Create mobile menu button

const menuButton = document.createElement("button");

menuButton.innerHTML = "☰";
menuButton.classList.add("menu-btn");

navbar.appendChild(menuButton);



menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});




// ===============================
// Scroll Animation
// ===============================


const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver(

(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }


    });


},

{

    threshold:0.15

}

);



sections.forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});





// ===============================
// Portfolio Slider
// ===============================


const slider = document.querySelector(".project-slider");

const projects = document.querySelectorAll(".project-card");


let currentProject = 0;



function slideProjects(){


    if(projects.length === 0)
        return;


    currentProject++;


    if(currentProject >= projects.length){

        currentProject = 0;

    }



    slider.scrollTo({

        left: projects[currentProject].offsetLeft,

        behavior:"smooth"

    });


}




setInterval(slideProjects,4000);







// ===============================
// Contact Form
// ===============================


const form = document.querySelector("form");


form.addEventListener("submit",(event)=>{


    event.preventDefault();



    alert(
        "Thank you! Your message has been received."
    );


    form.reset();


});






// ===============================
// Navbar Shadow On Scroll
// ===============================


window.addEventListener("scroll",()=>{


    const header = document.querySelector("header");


    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 5px 20px rgba(0,0,0,0.08)";

    }

    else{

        header.style.boxShadow="none";

    }


});