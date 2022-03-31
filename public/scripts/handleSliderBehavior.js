let container = document.getElementById('container')
let slider = document.getElementById('slider');
let slides = document.getElementsByClassName('slide').length;
let buttons = document.getElementsByClassName('slider-btn');
let slide = document.getElementById("slide");

let slidesPerPage = 1.8; //into container
let currentPosition = slides - slidesPerPage;
let currentMargin = 0;
let slidesCount = slides - slidesPerPage;
let slideWidth = slide.offsetWidth;
let spaceBetweenSlides = 20
let prevKeyActive = false;
let nextKeyActive = true;


function slideLeft() {
    console.log(currentPosition);
    if (currentPosition < slides-slidesPerPage) {
        slider.style.marginLeft = currentMargin + (slideWidth + spaceBetweenSlides)  + 'px';
        currentMargin += (slideWidth + spaceBetweenSlides);
        currentPosition++;
    };
    if (currentPosition === slidesPerPage) {
        buttons[0].classList.add('inactive');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
};


function slideRight() {
    console.log(currentPosition)
    if (currentPosition > 0 ) {
        slider.style.marginLeft = currentMargin - (slideWidth + spaceBetweenSlides)  + 'px';
        currentMargin -= (slideWidth + spaceBetweenSlides);
        currentPosition--;
    };
    if (currentPosition < 1) {
        buttons[1].classList.add('inactive');
    }
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
};

// window.addEventListener("resize", checkWidth);

// function checkWidth() {
//     containerWidth = container.offsetWidth;
//     console.log("container-offset: " + containerWidth)
//     setParams(containerWidth);
// }

// function setParams(w) {
//     if (w < 551) {
//         slidesPerPage = 1;
//         // slidesPerPage = slides;
//     } else {
//         if (w < 901) {
//             slidesPerPage = 2;
//             // slidesPerPage = slides;
//         } else {
//             if (w < 1101) {
//                 // slidesPerPage = slides;
//                 slidesPerPage = 3;
//             } else {
//                 // slidesPerPage =slides;
//                 slidesPerPage = 4;
//             }
//         }
//     }
//     slidesCount = slides - slidesPerPage;
//     if (currentPosition > slidesCount) {
//         currentPosition -= slidesPerPage;
//     };
//     currentMargin = - currentPosition * (100 / slidesPerPage);
//     slider.style.marginLeft = currentMargin + '%';
//     if (currentPosition > 0) {
//         buttons[0].classList.remove('inactive');
//     }
//     if (currentPosition < slidesCount) {
//         buttons[1].classList.remove('inactive');
//     }
//     if (currentPosition >= slidesCount) {
//         buttons[1].classList.add('inactive');
//     }
// }
//
// setParams();

// function slideLeft() {
//     console.log(currentPosition)
//     if (currentPosition != slidesCount) {
//         slider.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
//         currentMargin -= (100 / slidesPerPage);
//         currentPosition++;
//     };
//     if (currentPosition == slidesCount) {
//         buttons[1].classList.add('inactive');
//     }
//     if (currentPosition > 0) {
//         buttons[0].classList.remove('inactive');
//     }
// };

// function slideRight() {
//     console.log(currentPosition);
//     if (currentPosition != 0) {
//         slider.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
//         currentMargin += (100 / slidesPerPage);
//         currentPosition--;
//     };
//     if (currentPosition === 0) {
//         buttons[0].classList.add('inactive');
//     }
//     if (currentPosition < slidesCount) {
//         buttons[1].classList.remove('inactive');
//     }
// };