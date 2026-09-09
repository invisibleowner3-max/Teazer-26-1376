```javascript
// ==========================================
// AnimeVerse - JavaScript  
// ==========================================

// Wait until the HTML page has completely loaded
document.addEventListener("DOMContentLoaded", function () {

    // ------------------------------------------
    // 1. Welcome Message
    // ------------------------------------------

    console.log("Welcome to AnimeVerse!");

    alert("Welcome to AnimeVerse! Your Legal Anime Streaming Hub.");


    // ------------------------------------------
    // 2. Navigation Highlighting
    // ------------------------------------------

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            // Remove active class from all navigation links
            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            // Add active class to the clicked link
            this.classList.add("active");
        });

    });


    // ------------------------------------------
    // 3. Favourite Anime Search
    // ------------------------------------------

    const animeTable = document.querySelector("table");

    if (animeTable) {

        // Create search box
        const searchBox = document.createElement("input");

        searchBox.type = "text";
        searchBox.placeholder = "Search for an anime...";
        searchBox.id = "animeSearch";

        // Add search box before the table
        animeTable.parentNode.insertBefore(searchBox, animeTable);


        // Search functionality
        searchBox.addEventListener("keyup", function () {

            const searchValue = this.value.toLowerCase();

            const rows = animeTable.querySelectorAll("tr");

            // Start from row 1 because row 0 contains headings
            for (let i = 1; i < rows.length; i++) {

                const animeName = rows[i]
                    .cells[0]
                    .textContent
                    .toLowerCase();

                if (animeName.includes(searchValue)) {
                    rows[i].style.display = "";
                } else {
                    rows[i].style.display = "none";
                }

            }

        });

    }


    // ------------------------------------------
    // 4. Anime Table Row Click
    // ------------------------------------------

    const tableRows = document.querySelectorAll("table tr");

    tableRows.forEach(function (row, index) {

        if (index === 0) {
            return;
        }

        row.addEventListener("click", function () {

            const animeName = this.cells[0].textContent;
            const genre = this.cells[1].textContent;
            const episodes = this.cells[2].textContent;
            const status = this.cells[3].textContent;
            const rating = this.cells[4].textContent;

            alert(
                "Anime: " + animeName +
                "\nGenre: " + genre +
                "\nEpisodes: " + episodes +
                "\nStatus: " + status +
                "\nRating: " + rating
            );

        });

    });


    // ------------------------------------------
    // 5. Image Click Effect
    // ------------------------------------------

    const animeImages = document.querySelectorAll("#images img");

    animeImages.forEach(function (image) {

        image.addEventListener("click", function () {

            // Toggle enlarged image
            this.classList.toggle("enlarged");

        });

    });


    // ------------------------------------------
    // 6. Registration Form
    // ------------------------------------------

    const form = document.querySelector("form");

    if (form) {

        form.addEventListener("submit", function (event) {

            // Prevent page from refreshing
            event.preventDefault();

            const inputs = form.querySelectorAll("input");

            const username = inputs[0].value.trim();
            const email = inputs[1].value.trim();
            const password = inputs[2].value.trim();
            const favouriteAnime = inputs[3].value.trim();

            // Check username
            if (username === "") {
                alert("Please enter your username.");
                return;
            }

            // Check email
            if (email === "") {
                alert("Please enter your email address.");
                return;
            }

            // Check password
            if (password === "") {
                alert("Please enter a password.");
                return;
            }

            // Check favourite anime
            if (favouriteAnime === "") {
                alert("Please enter your favourite anime.");
                return;
            }

            // Successful registration
            alert(
                "Welcome to AnimeVerse, " +
                username +
                "!\n\n" +
                "Favourite Anime: " +
                favouriteAnime +
                "\n\n" +
                "Your AnimeVerse registration was successful."
            );

            // Clear form
            form.reset();

        });

    }


    // ------------------------------------------
    // 7. Dynamic Current Year
    // ------------------------------------------

    const footer = document.querySelector("footer p");

    if (footer) {

        const currentYear = new Date().getFullYear();

        footer.innerHTML =
            "&copy; " +
            currentYear +
            " AnimeVerse. All Rights Reserved.";

    }


    // ------------------------------------------
    // 8. Scroll To Sections
    // ------------------------------------------

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetID = this.getAttribute("href");

            if (targetID.startsWith("#")) {

                const targetSection =
                    document.querySelector(targetID);

                if (targetSection) {

                    event.preventDefault();

                    targetSection.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }

        });

    });


    // ------------------------------------------
    // 9. Audio Player Message
    // ------------------------------------------

    const audioPlayers = document.querySelectorAll("audio");

    audioPlayers.forEach(function (audio) {

        audio.addEventListener("play", function () {

            console.log("AnimeVerse audio started playing.");

        });

        audio.addEventListener("pause", function () {

            console.log("AnimeVerse audio paused.");

        });

    });


    // ------------------------------------------
    // 10. Back To Top Button
    // ------------------------------------------

    const topButton = document.createElement("button");

    topButton.textContent = "↑ Back to Top";

    topButton.id = "backToTop";

    document.body.appendChild(topButton);


    // Hide button initially
    topButton.style.display = "none";


    // Show button after scrolling
    window.addEventListener("scroll", function () {

        if (window.scrollY > 400) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }

    });


    // Scroll to top
    topButton.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    // ------------------------------------------
    // 11. Console Confirmation
    // ------------------------------------------

    console.log("AnimeVerse JavaScript loaded successfully.");
    console.log("Interactive features are ready.");

});
```
