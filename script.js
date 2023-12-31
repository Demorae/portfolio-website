function submitForm() {
    // Basic form validation
    var name = document.getElementById("name").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name === "" || mobile === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
    } else {
        // You can perform additional actions here, such as sending the form data to a server.
        alert("Form submitted successfully!");
    }
}

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});