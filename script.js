document.addEventListener("DOMContentLoaded", function () {
    const starWarsImage = document.getElementById("star-wars-image");
    const optimusPrimeImage = document.getElementById("optimus-prime-image");
    const transformButton = document.getElementById("transform-button");

    let isStarWars = true;

    transformButton.addEventListener("click", function () {
        if (isStarWars) {
            starWarsImage.style.display = "none";
            optimusPrimeImage.style.display = "block";
        } else {
            starWarsImage.style.display = "block";
            optimusPrimeImage.style.display = "none";
        }

        isStarWars = !isStarWars;
    });
});
