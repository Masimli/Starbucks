const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const arrow = header.querySelector('#arrow-down');
    
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
    
    arrow.classList.toggle('rotate');
  });
});

$('.owl-carousel').owlCarousel({
  loop:false,
  margin:20,
  nav:true,
  dots:false,
  responsive:{
      0:{
          items:3
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
})

function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var error = document.getElementById("error");

  error.innerHTML = "";

  if (username === "" && password === "") {
    error.innerHTML = "Error: Enter an email/username and password.";
    return false;
  }

  if (username === "") {
    error.innerHTML = "Error: Enter an email/username.";
    return false;
  }

  if (password === "") {
    error.innerHTML = "Error: Enter a password.";
    return false;
  }


}
