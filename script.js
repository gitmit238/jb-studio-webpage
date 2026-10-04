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

const form = document.querySelector("#form");
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener("submit", async (event) => {

    event.preventDefault();

    const formData = new FormData(form);

    // Replace this with your NEW Web3Forms access key
    formData.append(
        "access_key",
        "74b88379-1fe4-4b61-ab3d-79d1e5234bad"
    );

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {

        const response = await fetch(
            "https://api.web3forms.com/submit",
            {
                method: "POST",
                body: formData
            }
        );

        const data = await response.json();

        if (response.ok) {

            alert(
                "Thank you! Your message has been sent successfully."
            );

            form.reset();

        } else {

            alert(
                "Error: " + data.message
            );

        }

    } catch (error) {

        alert(
            "Something went wrong. Please try again."
        );

    } finally {

        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }

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