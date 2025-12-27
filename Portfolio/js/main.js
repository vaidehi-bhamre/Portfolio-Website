/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav_menu"),
  navToggle = document.getElementById("nav_toggle"),
  navClose = document.getElementById("nav_close");

/* Menu show */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu hidden */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav_links");

const linkAction = () => {
  const navMenu = document.getElementById("nav_menu");
  // When we click on each nav_link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== HOME TYPED JS ===============*/
const typedHome = new Typed("#home_typed", {
  strings: ["Web Developer", "Designer", "Tech Enthusiast"],
  typeSpeed: 50,
  backspeed: 40,
  backdelay: 2000,
  loop: true,
  cursorChar: "_",
});
/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById("header");
  // Add a class if the bottom offset is greater than 50 of the viewport
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);

/*=============== CONTACT EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"); // Remove #
const contactMessage = document.getElementById("contact-message"); // Remove #

const sendEmail = (e) => {
  e.preventDefault();

  // serviceID - templateID - #form - publicKey
  emailjs
    .sendForm(
      // Capital F, not sendform
      "service_8gt3loz",
      "template_r8har2h",
      "#contact-form",
      "WwkpuXdjyxCuTJ0n_"
    )
    .then(() => {
      // Show sent message
      contactMessage.textContent = "Message sent successfully ✅";

      // Remove message after 5 seconds
      setTimeout(() => {
        contactMessage.textContent = "";
      }, 5000);

      // Reset form
      contactForm.reset();
    })
    .catch((error) => {
      // Show error message
      contactMessage.textContent = "Message failed to send ❌";
      console.error("EmailJS Error:", error);
    });
};

contactForm.addEventListener("submit", sendEmail);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 56,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav_menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: false, // Set to true if you want animation to repeat on scroll
});

// Home Section
sr.reveal(`.home_image`, { origin: "left", delay: 200 });
sr.reveal(`.home_social`, { origin: "left", delay: 400 });
sr.reveal(`.home_data`, { origin: "right", delay: 600 });

// About Section
sr.reveal(`.about_data`, { origin: "left", delay: 200 });
sr.reveal(`.about_skills`, { origin: "left", delay: 400 });
sr.reveal(`.about_image`, { origin: "right", delay: 600 });

// Projects Section
sr.reveal(`.section_title`, { interval: 100 });
sr.reveal(`.projects_card`, { interval: 200, origin: "bottom" });

// Resume Section
sr.reveal(`.resume_content`, { interval: 300, origin: "bottom" });

// Contact Section
sr.reveal(`.contact_form`, { origin: "left", delay: 200 });
sr.reveal(`.contact_content`, { origin: "right", delay: 400 });

// Footer
sr.reveal(`.footer_container`, { origin: "bottom" });
