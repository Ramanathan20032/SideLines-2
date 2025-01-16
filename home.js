// Switching - Tag Line
document.addEventListener("DOMContentLoaded", () => {
  const tagLines = [
    "Your perfect dining experience",
    "Grab a Drink, Grab a Seat, and Enjoy!",
    "Exquisite Flavors, Unforgettable Evenings",
    "Delicious Bites, Thrilling Nights",
    "The Perfect Mix of Sports, Sips, and Celebration!",
  ];

  let currentIndex = 0;
  const bannerTagline = document.querySelector(".banner-tagLine");

  function tagSwitch() {
    bannerTagline.classList.add("fade-out");
    setTimeout(() => {
      bannerTagline.textContent = tagLines[currentIndex];
      currentIndex = (currentIndex + 1) % tagLines.length;
      bannerTagline.classList.remove("fade-out");
    }, 600);
  }

  tagSwitch();

  setInterval(tagSwitch, 3500);
});


// About - Animation
document.addEventListener("DOMContentLoaded", () => {
  const aboutContent = document.querySelector(".about-container .row .left-col .about-content");

  const handleScroll = () => {
    const rect = aboutContent.getBoundingClientRect();
    const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

    if (isVisible) {
      aboutContent.classList.add("animate"); // Add the animate class
      window.removeEventListener("scroll", handleScroll); // Remove the scroll listener
    }
  };

  window.addEventListener("scroll", handleScroll); // Attach scroll listener
});


//  Event - Animation
document.addEventListener("DOMContentLoaded", () => {
  const menuElements = document.querySelectorAll(".about-container .row .right-col .row .food-text");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target); // Stop observing after animation triggers
      }
    });
  });

  menuElements.forEach((element) => {
    observer.observe(element);
  });
});


//  Event - Animation
document.addEventListener("DOMContentLoaded", () => {
  const zoomElements = document.querySelectorAll(".event-wrapper .row .e-zoom");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target); // Stop observing after animation triggers
      }
    });
  });

  zoomElements.forEach((element) => {
    observer.observe(element);
  });
});
