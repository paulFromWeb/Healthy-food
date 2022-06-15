
// function slider({ container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field }) {
//     // SLIDER ВАРИАНТ 1
//     // const slides = document.querySelectorAll('.offer__slide'),
//     //     prev = document.querySelector('.offer__slider-prev'),
//     //     next = document.querySelector('.offer__slider-next'),
//     //     total = document.querySelector('#total'),
//     //     current = document.querySelector('#current')
//     // let slideIndex = 1;

//     // showSlides(slideIndex);
//     // if (slides.length < 10) {
//     //     total.textContent = `0${slides.length}`;
//     // } else {
//     //     total.textContent = slides.length;
//     // }
//     // function showSlides(n) {
//     //     if (n > slides.length) {
//     //         slideIndex = 1;
//     //     }
//     //     if (n < 1) {
//     //         slideIndex = slides.length;
//     //     }
//     //     slides.forEach(item => item.style.display = 'none');
//     //     slides[slideIndex - 1].style.display = 'block';
//     //     if (slides.length < 10) {
//     //         current.textContent = `0${slideIndex}`;
//     //     } else {
//     //         current.textContent = slideIndex;
//     //     }
//     // }
//     // function plusSlides(n) {
//     //     showSlides(slideIndex += n)
//     // }
//     // prev.addEventListener('click', () => {
//     //     plusSlides(-1)
//     // })
//     // next.addEventListener('click', () => {
//     //     plusSlides(1)
//     // })



//     // SLIDER ВАРИАНТ 2


//     const slides = document.querySelectorAll(slide),
//         slider = document.querySelector(container),
//         prev = document.querySelector(prevArrow),
//         next = document.querySelector(nextArrow),
//         total = document.querySelector(totalCounter),
//         current = document.querySelector(currentCounter),
//         slidesWrapper = document.querySelector(wrapper),
//         slidesField = document.querySelector(field),
//         width = window.getComputedStyle(slidesWrapper).width;
//     let slideIndex = 1;
//     let offset = 0;

//     if (slides.length < 10) {
//         total.textContent = `0${slides.length}`;
//         current.textContent = `0${slideIndex}`;
//     } else {
//         total.textContent = slides.length;
//         current.textContent = slideIndex;
//     }
//     slidesField.style.width = 100 * slides.length + '%';

//     slidesField.style.display = 'flex'
//     slidesField.style.transition = '0.5s all';

//     slidesWrapper.style.overflowX = 'hidden'

//     slides.forEach(slide => {
//         slide.style.width = width;
//     })


//     function deleteNotDigits(str) {
//         return +str.replace(/\D/g, '');
//     }
//     next.addEventListener('click', () => {
//         if (offset == deleteNotDigits(width) * (slides.length - 1)) {
//             offset = 0
//         } else {
//             offset += deleteNotDigits(width);
//         }

//         slidesField.style.transform = `translateX(-${offset}px)`
//         if (slideIndex == slides.length) {
//             slideIndex = 1
//         } else {
//             slideIndex++;
//         }

//         if (slides.length < 10) {
//             current.textContent = `0${slideIndex}`;
//         } else {
//             current.textContent = slideIndex;
//         }
//     })

//     prev.addEventListener('click', () => {
//         if (offset == 0) {

//             offset = deleteNotDigits(width) * (slides.length - 1)
//         } else {
//             offset -= deleteNotDigits(width);
//         }

//         slidesField.style.transform = `translateX(-${offset}px)`

//         if (slideIndex == 1) {
//             slideIndex = slides.length
//         } else {
//             slideIndex--;
//         }
//         if (slides.length < 10) {
//             current.textContent = `0${slideIndex}`;
//         } else {
//             current.textContent = slideIndex;
//         }
//     })
// };
// export default slider;