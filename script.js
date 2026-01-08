console.log("Slider script loaded");
function toggleService(id) {
    const service= document.getElementById(id);
    service.style.display=
        service.style.display === "block" ? "none" : "block";
}

let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
    index = (index + 1) % slides.length;
}

setInterval(showSlide, 3000); // change image every 3 seconds

document.getElementById("year").textContent = new Date().getFullYear();
