let menuicn = document.querySelector(".menuicn"); 
        let nav = document.querySelector(".navcontainer"); 
    
        menuicn.addEventListener("click", () => { 
            nav.classList.toggle("navclose"); 
        });

        function navigateTo(page) {
    // Remove the "active" class from all nav-options
    let navOptions = document.querySelectorAll('.nav-option');
    navOptions.forEach(option => option.classList.remove('active'));

    // Find the clicked nav-option and add the "active" class
    let clickedOption = Array.from(navOptions).find(option => option.onclick && option.onclick.toString().includes(page));
    if (clickedOption) {
        clickedOption.classList.add('active');
    }

    // Redirect to the specified page
    window.location.href = page;
}


