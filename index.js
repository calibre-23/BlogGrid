document.addEventListener("DOMContentLoaded", () => {
    const hiddenPosts = document.querySelectorAll(".blog4, .blog5, .blog6");
    const mainElement = document.querySelector("main");
    const viewMoreButton = document.getElementById("btn");
    viewMoreButton.addEventListener("click", () => {
        console.log("Button clicked");
       
       
        mainElement.classList.toggle("show-more-posts");
        const showingPosts = mainElement.classList.contains("show-more-posts");
       
        hiddenPosts.forEach(post => {
            if (showingPosts) {
                post.classList.add("article-shown");
            } else {
                post.classList.remove("article-shown");
            }
        });
       

        viewMoreButton.textContent = showingPosts ? "View fewer posts" : "View more posts";
    });
    const hamburgerIcon = document.querySelector('.ham');
    const navMenu = document.querySelector('nav ul');
    hamburgerIcon.addEventListener('click', () => {
        navMenu.classList.toggle('mobile-menu-active');
    });
});