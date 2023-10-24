const images = document.querySelectorAll('#expand-image');
const overlay = document.getElementById('overlay');

images.forEach((image) => {
    image.addEventListener('click', () => {
        if (image.classList.contains('expanded')) {
            // If the image is expanded, remove the 'expanded' class to shrink it
            image.classList.remove('expanded');
            overlay.style.display = 'none'; // Hide the overlay
        } else {
            // If the image is not expanded, add the 'expanded' class to expand it
            image.classList.add('expanded');
            overlay.style.display = 'block'; // Show the overlay
        }
    });
});


