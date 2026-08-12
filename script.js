document.addEventListener("DOMContentLoaded", function () {

    // Product gallery ki saari images
    const images = document.querySelectorAll(
        ".product-gallery img, .gallery img, .product-images img"
    );

    // Lightbox banaye
    const lightbox = document.createElement("div");
    lightbox.id = "imageLightbox";

    lightbox.innerHTML = `
        <span id="closeLightbox">&times;</span>
        <button id="prevImage">&#10094;</button>
        <img id="lightboxImage" src="" alt="Product Image">
        <button id="nextImage">&#10095;</button>
    `;

    document.body.appendChild(lightbox);

    const lightboxImage = document.getElementById("lightboxImage");
    const closeLightbox = document.getElementById("closeLightbox");
    const prevImage = document.getElementById("prevImage");
    const nextImage = document.getElementById("nextImage");

    let currentImage = 0;

    // Har photo par click event
    images.forEach((image, index) => {

        image.style.cursor = "zoom-in";

        image.addEventListener("click", function () {
            currentImage = index;
            showImage(currentImage);
            lightbox.classList.add("active");
        });

    });

    function showImage(index) {

        if (index < 0) {
            currentImage = images.length - 1;
        }

        if (index >= images.length) {
            currentImage = 0;
        }

        lightboxImage.src = images[currentImage].src;
        lightboxImage.alt = images[currentImage].alt;
    }

    // Previous
    prevImage.addEventListener("click", function (event) {
        event.stopPropagation();
        currentImage--;
        showImage(currentImage);
    });

    // Next
    nextImage.addEventListener("click", function (event) {
        event.stopPropagation();
        currentImage++;
        showImage(currentImage);
    });

    // Close
    closeLightbox.addEventListener("click", function () {
        lightbox.classList.remove("active");
    });

    // Background par click close
    lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            lightbox.classList.remove("active");
        }
    });

    // Keyboard controls
    document.addEventListener("keydown", function (event) {

        if (!lightbox.classList.contains("active")) return;

        if (event.key === "Escape") {
            lightbox.classList.remove("active");
        }

        if (event.key === "ArrowLeft") {
            currentImage--;
            showImage(currentImage);
        }

        if (event.key === "ArrowRight") {
            currentImage++;
            showImage(currentImage);
        }

    });

});