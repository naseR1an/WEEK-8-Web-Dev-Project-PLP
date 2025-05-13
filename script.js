document.addEventListener("DOMContentLoaded", function() {
    let ctaButton = document.querySelector(".cta-button");
    
    ctaButton.addEventListener("click", function() {
        alert("Explore our exclusive jewellery collection!");
    });

    function validateForm() {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        
        if (name === "" || email === "") {
            alert("All fields are required!");
            return false;
        }
        return true;
    }
});
