document.addEventListener("DOMContentLoaded", function () {
    const bgMusic = document.getElementById("bgMusic");
    const playMusic = document.getElementById("playMusic");
    const openGallery = document.getElementById("openGallery");
    const gallery = document.querySelector(".gallery");
    const overlay = document.querySelector(".overlay");
    const galleryImage = document.getElementById("galleryImage");
    const caption = document.getElementById("caption");
    const nextImage = document.getElementById("nextImage");
    const prevImage = document.getElementById("prevImage");
    const closeGallery = document.getElementById("closeGallery");

    const images = [
        { src: "amad.jpg", text: "Ini adalah aku" },
        { src: "aning.jpg", text: "Ini adalah kamu 😍" },
        { src: "amadaning.jpg", text: "Ini adalah kita ❤️" },
        { src: "amadaning2.jpg", text: "Dan Semoga kita selalu bersama selamanya🌹" }
    ];

    let currentIndex = 0;

    function updateGallery() {
        galleryImage.src = images[currentIndex].src;
        caption.innerText = images[currentIndex].text;
    }

    openGallery.addEventListener("click", function () {
        gallery.classList.remove("hidden");
        overlay.style.display = "block"; // Aktifkan efek blur
        updateGallery();
    });

    nextImage.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % images.length;
        updateGallery();
    });

    prevImage.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateGallery();
    });

    closeGallery.addEventListener("click", function () {
        gallery.classList.add("hidden");
        overlay.style.display = "none"; // Hilangkan efek blur
    });

    playMusic.addEventListener("click", function () {
        bgMusic.play().then(() => {
            playMusic.style.display = "none";
        }).catch(error => console.log("Autoplay diblokir:", error));
    });
});
