console.log("wallpaper.js");

const baseUrl = window.location.origin;

function randomWallpaper() {
    const images = [
        "/images/barcelona-sky_view_lowRes.jpg",
        "/images/inkoon_saaristo_salmi.jpg",
        "/images/arabianranta_spring_EDIT_compressed.jpg",
        "/images/berlin1.jpg",
        "/images/berlin2.jpg",
        "/images/berlin3.jpg",
        "/images/berlin4.jpg",
        "/images/berlin5.jpg",
        "/images/berlin6.jpg",
        "/images/airplane_view.jpg",
        "/images/airplane_view2.jpg",
        "/images/kalasatama-sompasaari.jpg",
        "/images/kabbole_sea.jpg",
        "/images/arabiankirjaston-puut.jpg",
    ];

    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = baseUrl + images[randomIndex];
	const selectedImageUrl = "url(" + selectedImage + ")";

    document.querySelector('body').style.backgroundImage = selectedImageUrl;
    //console.log("Image URL: " + selectedImageUrl); DEBUGGING
}

randomWallpaper();