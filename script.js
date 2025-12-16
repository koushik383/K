// side menu ke liye when jab mobile me ho 
var sidemeu = document.getElementById("sidemenu");
function openmenu() {
  sidemeu.style.right = "0";
}
function closemenu() {
  sidemeu.style.right = "-200px";
}


// ye code about ke niche jo three tab aa rhe hai uske liye hai 
//<--- about ke content ko click kr hatane ke liye aur lane ke liye javascript function bana rhe hai --->
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

// <----- ye function se click krne per data aaye aur dusre ka data chala jaye uske liye ----->
function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
  // click krne per sara data aaye uske liye 
}



// for light theme and dark theme
document.addEventListener('DOMContentLoaded', (event) => {
  const themeToggle = document.getElementById('themeToggle');
  const currentTheme = localStorage.getItem('theme') || 'light';

  document.body.classList.add(`${currentTheme}-theme`);

  if (currentTheme === 'dark') {
    themeToggle.checked = true;
  }
  themeToggle.addEventListener('change', function () {
    if (this.checked) {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    }
  });
});



//  For Feedback Form
const scriptURL = 'https://script.google.com/macros/s/AKfycby5TOHYQ-wRuwornIRXt88mXFqK-ozQeARiUfBSpG989kmy5af66NSiB8phlrryCdMj/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      msg.innerHTML = "Message sent successfully"
      setTimeout(function () {
        msg.innerHTML = ""

      }, 4000)
      form.reset()

    })
    .catch(error => console.error('Error!', error.message))
})




// Slide images according to the slide button clicks for certificates page5
const initSliderpage5 = () => {
  const list5 = document.querySelector('.slider-wrapper-page5 .page5');
  const sliderButtonspage5 = document.querySelectorAll('.slider-wrapper-page5 .slide-button');
  const maxScrollLeft = list5.scrollWidth - list5.clientWidth;
  // Slide images according to the slide button clicks
  sliderButtonspage5.forEach(button => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = list5.clientWidth * direction;
      list5.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });
  // Show or hide slide buttons based on scroll position
  const handleSlideButtons = () => {
    sliderButtonspage5[0].style.display = list5.scrollLeft <= 0 ? "none" : "block";
    sliderButtonspage5[1].style.display = list5.scrollLeft >= maxScrollLeft ? "none" : "block";
  }
  // Call these two functions when image list scrolls
  list5.addEventListener("scroll", () => {
    handleSlideButtons();
  });
}
window.addEventListener("load", initSliderpage5);




// Slide images according to the slide button clicks for projects page3
const initSliderpage3 = () => {
  const list3 = document.querySelector('.slider-wrapper-page3 .page3');
  const sliderButtonspage3 = document.querySelectorAll('.slider-wrapper-page3 .slide-button');
  const maxScrollLeft = list3.scrollWidth - list3.clientWidth;
  // Slide images according to the slide button clicks
  sliderButtonspage3.forEach(button => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = list3.clientWidth * direction;
      list3.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });
  // Show or hide slide buttons based on scroll position
  const handleSlideButtons = () => {
    sliderButtonspage3[0].style.display = list3.scrollLeft <= 0 ? "none" : "block";
    sliderButtonspage3[1].style.display = list3.scrollLeft >= maxScrollLeft ? "none" : "block";
  }
  // Call these two functions when image list scrolls
  list3.addEventListener("scroll", () => {
    handleSlideButtons();
  });
}
window.addEventListener("load", initSliderpage3);





// Slide images according to the slide button clicks for EXTRACURRICULARACTIVITIES-list page4
const initSliderpage4 = () => {
  const list4 = document.querySelector('.slider-wrapper-page4 .EXTRACURRICULARACTIVITIES-list');
  const sliderButtonspage4 = document.querySelectorAll('.slider-wrapper-page4 .slide-button');
  const maxScrollLeft = list4.scrollWidth - list4.clientWidth;
  // Slide images according to the slide button clicks
  sliderButtonspage4.forEach(button => {
    button.addEventListener("click", () => {
      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = list4.clientWidth * direction;
      list4.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });
  // Show or hide slide buttons based on scroll position
  const handleSlideButtons = () => {
    sliderButtonspage4[0].style.display = list4.scrollLeft <= 0 ? "none" : "block";
    sliderButtonspage4[1].style.display = list4.scrollLeft >= maxScrollLeft ? "none" : "block";
  }
  // Call these two functions when image list scrolls
  list4.addEventListener("scroll", () => {
    handleSlideButtons();
  });
}
window.addEventListener("load", initSliderpage4);






const filterImg = document.querySelectorAll(".work-list .work");
window.onload = () => {
  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute("onclick", "preview(this)"); //adding onclick attribute in all available images
  }
}
//fullscreen image preview function
//selecting all required elements
const previewBox = document.querySelector(".preview-box"),
  previewImg = previewBox.querySelector("img"),
  closeIcon = previewBox.querySelector(".icon"),
  shadow = document.querySelector(".shadow");

function preview(element) {
  let selectedPrevImg = element.querySelector("img").src; //getting user clicked image source link and stored in a variable
  previewImg.src = selectedPrevImg; //passing the user clicked image source in preview image source
  previewBox.classList.add("show"); //show the preview image box
  closeIcon.onclick = () => { //if user click on close icon of preview box
    previewBox.classList.remove("show"); //hide the preview box
    shadow.classList.remove("show"); //hide the light grey background
    document.querySelector("body").style.overflow = "auto"; //show the scroll bar on body
  }
}
