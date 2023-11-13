document.addEventListener('DOMContentLoaded', function () {
    // Hide sidebar by default
    var sidebar = document.querySelector('.sidebar');
    sidebar.style.width = '0';

    function toggleSidebar() {
        var sidebar = document.querySelector('.sidebar');
        sidebar.style.width = (sidebar.style.width === '0px' || sidebar.style.width === '') ? '100px' : '0';
    }

    // Add click event listener to the menu image
    var menuImage = document.querySelector('.menu');
    if (menuImage) {
        menuImage.addEventListener('click', function () {
            toggleSidebar();
        });
    }

    // Function for smooth scrolling
    function smoothScroll(target) {
        const targetElement = document.querySelector(target);
        const targetPosition = targetElement.offsetTop;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 2000;
        let startTime;

        function animation(currentTime) {
            if (!startTime) startTime = currentTime;
            const progress = currentTime - startTime;
            const easing = easeInOutCubic(progress, startPosition, distance, duration);
            window.scrollTo(0, easing);
            if (progress < duration) requestAnimationFrame(animation);
        }

        function easeInOutCubic(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t + b;
            t -= 2;
            return c / 2 * (t * t * t + 2) + b;
        }

        requestAnimationFrame(animation);
    }
});
