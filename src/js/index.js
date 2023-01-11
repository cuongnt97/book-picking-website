import '@css/index.css';


/** COUNTER UP */
function subscriber() {
  let counts = setInterval(updated);
  let upto = 0;
  function updated() {
    var subscriber = document.getElementById("subscriber");
    subscriber.innerHTML = ++upto;
    if (upto == 4500) {
      clearInterval(counts);
    }
  }
}

function download() {
  let counts = setInterval(updated, 100);
  let upto = 0;
  function updated() {
    var download = document.getElementById("download");
    download.innerHTML = ++upto;
    if (upto == 200) {
      clearInterval(counts);
    }
  }
}

function product() {
  let counts = setInterval(updated);
  let upto = 0;
  function updated() {
    var product = document.getElementById("product");
    product.innerHTML = ++upto;
    if (upto == 1100) {
      clearInterval(counts);
    }
  }
}

function ebook() {
  let counts = setInterval(updated, 100);
  let upto = 0;
  function updated() {
    var ebook = document.getElementById("ebook");
    ebook.innerHTML = ++upto;
    if (upto == 30) {
      clearInterval(counts);
    }
  }
}

subscriber();
download();
product();
ebook();

/**===================================================================== */

/** Slideshow automatic */
let slideIndex = 1;
showSlides();
function showSlides() {
  let slides = document.getElementsByClassName("mySlide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("appear");
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].classList.add("appear");

  setTimeout(showSlides, 2000);
}

/** ======================================================================= */

/**================FEEDBACK SLIDE========================================== */
let indexFeedback = 1;
function currentSlide(n) {
  showSlideFeedback((indexFeedback = n));
}
function showSlideFeedback(n) {
  let slides = document.getElementsByClassName("feedback-detail");
  let dots = document.getElementsByClassName("owl-dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    indexFeedback = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.add("hide");
    dots[i].classList.remove("active");
  }
  slides[indexFeedback - 1].classList.remove("hide");
  dots[indexFeedback - 1].classList.add("active");
}

window.addEventListener("load", function () {
  const sliderMain = document.querySelector(".books");
  const sliderItems = document.querySelectorAll(".book-item");
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");
  const sliderItemWidth = sliderItems[0].offsetWidth;
  const slidesLength = sliderItems.length;
  let positionX = 0;
  let index = 0;

  nextBtn.addEventListener("click", function () {
    handleChangeSlide(1);
  });
  prevBtn.addEventListener("click", function () {
    handleChangeSlide(-1);
  });

  function handleChangeSlide(direction) {
    if (direction === 1) {
      if (index >= slidesLength - 1) {
        index = slidesLength - 1;
        return;
      }
      positionX = positionX - sliderItemWidth;
      sliderMain.style = `transform: translateX(${positionX}px)`;
      index++;
    } else if (direction === -1) {
      if (index <= 0) {
        index = 0;
        return;
      }
      positionX = positionX + sliderItemWidth;
      sliderMain.style = `transform: translateX(${positionX}px)`;
      index--;
    }
  }
});

/**================BOOK SLIDE========================================== */

/** ============================SCROLL TOP=========================================== */
let mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo(0, 0);
}
/** ======================================================================= */

// ==================== Cart ===============

let modalWrapper = document.querySelector(".js-modal-wrapper");
let modalCart = document.querySelector(".js-modal-cart");
let cartIcon = document.getElementById("js-cart-modal");
let cartX = document.getElementById("cart-icon");

cartIcon.addEventListener("click", function showCart() {
  modalCart.classList.add("open-cart");
  modalWrapper.classList.add("open-cart__wrapper");
});

cartX.addEventListener("click", function closeCart() {
  modalCart.classList.remove("open-cart");
  modalWrapper.classList.remove("open-cart__wrapper");
});


/**================PLAY VIDEO========================================== */
let btnPlay = document.querySelector(".btn-play");
let activeVideo = document.querySelector(".active-video");
let btnClose = document.querySelector(".btn-close");
let page = document.getElementById("page");

btnPlay.addEventListener("click", () => {
    activeVideo.style.display = "block";
});

btnClose.addEventListener("click", () => {
    activeVideo.style.display = "none";
})
/**==================================================================== */
