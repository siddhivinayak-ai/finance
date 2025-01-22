window.onload = function() {
    setTimeout(function() {
        document.body.style.animation = "fadeOut 1s ease-in forwards";
        setTimeout(function() {
            window.location.href = "home.html"; // Redirect to home.html after the splash screen
        }, 1000);
    }, 5000);
};
