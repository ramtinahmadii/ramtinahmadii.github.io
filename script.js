
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

});



const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

  navMenu.classList.toggle("active");

});


const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

  link.addEventListener("click", () => {

    navMenu.classList.remove("active");

  });

});



const revealElements =
  document.querySelectorAll(".reveal");

const revealObserver =
  new IntersectionObserver(
    (entries, observer) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.15
    }
  );


revealElements.forEach(element => {

  revealObserver.observe(element);

});



const counters =
  document.querySelectorAll(".counter");

let countersStarted = false;


function startCounters() {

  if (countersStarted) {
    return;
  }

  countersStarted = true;

  counters.forEach(counter => {

    const target =
      parseFloat(counter.dataset.target);

    const decimal =
      counter.dataset.decimal === "true";

    const duration = 1800;

    const startTime =
      performance.now();


    function updateCounter(currentTime) {

      const progress =
        Math.min(
          (currentTime - startTime) / duration,
          1
        );

      const ease =
        1 - Math.pow(1 - progress, 3);

      const current =
        target * ease;


      if (decimal) {

        counter.textContent =
          current.toFixed(1);

      } else {

        counter.textContent =
          Math.floor(current);

      }


      if (progress < 1) {

        requestAnimationFrame(updateCounter);

      } else {

        counter.textContent =
          decimal
            ? target.toFixed(1)
            : target;

      }

    }


    requestAnimationFrame(updateCounter);

  });

}


const performanceSection =
  document.querySelector("#performance");


const performanceObserver =
  new IntersectionObserver(
    entries => {

      if (entries[0].isIntersecting) {

        startCounters();

      }

    },
    {
      threshold: 0.3
    }
  );


performanceObserver.observe(performanceSection);



const modelButtons =
  document.querySelectorAll(".model-link");


modelButtons.forEach(button => {

  button.addEventListener("click", () => {

    const model =
      button.dataset.model;

    alert(
      `${model}\n\nThis is a learning project inspired by Mercedes-Benz.`
    );

  });

});



const modal =
  document.getElementById("testDriveModal");

const testDriveBtn =
  document.getElementById("testDriveBtn");

const ctaTestDrive =
  document.getElementById("ctaTestDrive");

const modalClose =
  document.getElementById("modalClose");


function openModal() {

  modal.classList.add("active");

  document.body.style.overflow = "hidden";

}


function closeModal() {

  modal.classList.remove("active");

  document.body.style.overflow = "";

}


testDriveBtn.addEventListener(
  "click",
  openModal
);


ctaTestDrive.addEventListener(
  "click",
  openModal
);


modalClose.addEventListener(
  "click",
  closeModal
);



modal.addEventListener("click", event => {

  if (event.target === modal) {

    closeModal();

  }

});



document.addEventListener("keydown", event => {

  if (event.key === "Escape") {

    closeModal();

    navMenu.classList.remove("active");

  }

});

const testDriveForm =
  document.getElementById("testDriveForm");


testDriveForm.addEventListener("submit", event => {

  event.preventDefault();

  alert(
    "Thank you!\n\nYour test drive request has been received."
  );

  testDriveForm.reset();

  closeModal();

});



const images =
  document.querySelectorAll("img");


images.forEach(image => {

  image.addEventListener("error", () => {

    console.error(
      "Image not found:",
      image.getAttribute("src")
    );

  });

});
