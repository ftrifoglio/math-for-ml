/**
 * Sets up an Intersection Observer to trigger an animation when a specified image element becomes visible in the viewport.
 *
 * @param {string} animationId - The unique identifier of the animation object or function to be triggered when the image is in the viewport.
 * @param {string} imgId - The ID of the HTML image element that is being observed.
 */
function setupAnimationIntersectionObserver(animationId, imgId) {
    /**
     * Handles the intersection of the target element (image) with the viewport and triggers the specified animation when it becomes visible.
     *
     * @param {IntersectionObserverEntry[]} entries - An array of IntersectionObserverEntry objects, each representing an observed element's intersection data.
     * @param {IntersectionObserver} observer - The IntersectionObserver instance observing the target element.
     */
    function handleIntersection(entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                // When the target element becomes visible in the viewport, trigger the animation by calling the specified animation function.
                window[animationId].play_animation();
                
                // Stop observing the target element to avoid triggering the animation multiple times.
                observer.unobserve(entry.target);
            }
        });
    }

    // Attach an event listener to ensure the DOM content is fully loaded before setting up the Intersection Observer.
    document.addEventListener('DOMContentLoaded', function () {
        // Retrieve the target image element by its ID.
        var targetElement = document.getElementById(imgId);
        
        // Define the options for the Intersection Observer.
        var options = {
            root: null,         // Use the viewport as the root.
            rootMargin: '0px',  // No margin around the root.
            threshold: 0.5      // Trigger when at least 50% of the target element is visible.
        };
        
        // Create an Intersection Observer instance with the specified options and link it to the handleIntersection function.
        var observer = new IntersectionObserver(handleIntersection, options);
        
        // Begin observing the target image element for intersection with the viewport.
        observer.observe(targetElement);
    });
}


$(document).ready(function() {

    $("img").each(function() {
        $(this).wrap('<a class="imgLink" href="#"></a>');
    });

    $(".imgLink").click(function(e) {
        e.preventDefault();  // Prevents the default action (navigation)
        var src = $(this).find("img").attr("src");
        $("#overlayImage").attr("src", src);
        $("#imageOverlay").fadeIn();
    });

    $("#imageOverlay").click(function() {
        $(this).fadeOut();
    });

});
