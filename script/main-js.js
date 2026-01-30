
const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
});


const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const slideshow = document.querySelector('.slideshow');

let current = 0;

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[i].classList.add('active');
}

nextBtn.addEventListener('click', () => {
    if (current + 1 >= slides.length) {
        current = 0
    } else {
        current += 1
    }
    showSlide(current);
});

prevBtn.addEventListener('click', () => {
    if (current - 1 < 0) {
        current = slides.length - 1
    } else {
        current -= 1
    }
    showSlide(current);
});


slides.forEach(slide => {
    const image = slide.querySelector('.me');
    const topLeft = slide.querySelector('.hover-grid .nw');
    const top = slide.querySelector('.hover-grid .n');
    const topRight = slide.querySelector('.hover-grid .ne');
    const left = slide.querySelector('.hover-grid .w');
    const right = slide.querySelector('.hover-grid .e');
    const bottomLeft = slide.querySelector('.hover-grid .sw');
    const bottom = slide.querySelector('.hover-grid .s');
    const bottomRight = slide.querySelector('.hover-grid .se');

    topLeft.addEventListener('mouseenter', () => {
        image.src = './img/NW.png';
    });

    topLeft.addEventListener('mouseleave', () => {
        image.src = './img/front.png';
    });

    top.addEventListener('mouseenter', () => {
        image.src = './img/N.png';
    });

    top.addEventListener('mouseleave', () => {
        image.src = './img/front.png';
    });

    topRight.addEventListener('mouseenter', () => {
        image.src = './img/NE.png';
    });

    topRight.addEventListener('mouseleave', () => {
        image.src = './img/front.png';
    });

    left.addEventListener('mouseenter', () => {
        image.src = './img/W.png';
    });

    left.addEventListener('mouseleave', () => {
        image.src = './img/front.png';
    });

    right.addEventListener('mouseenter', () => {
        image.src = './img/E.png';
    });

    right.addEventListener('mouseleave', () => {
        image.src = './img/front.png';
    });

    bottomLeft.addEventListener('mouseenter', () => {
        image.src = './img/SW.png';
    });

    bottomLeft.addEventListener('mouseleave', () => {
        image.src = './img/front.png';
    });

    bottom.addEventListener('mouseenter', () => {
        image.src = './img/S.png';
    });

    bottom.addEventListener('mouseleave', () => {
        image.src = './img/front.png';
    });

    bottomRight.addEventListener('mouseenter', () => {
        image.src = './img/SE.png';
    });

    bottomRight.addEventListener('mouseleave', () => {
        image.src = './img/front.png';
    });
});



