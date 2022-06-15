
document.addEventListener('DOMContentLoaded', () => {
    // const modalTimer = setTimeout(() => openModal('.modal', modalTimer), 50000);
    function calculate() {
        //CALCULATOR

        const result = document.querySelector('.calculating__result span');
        let sex, height, weight, age, ratio;
        if (localStorage.getItem('sex')) {
            sex = localStorage.getItem('sex');
        } else {
            sex = 'female';
            localStorage.setItem('sex', 'female');
        }
        if (localStorage.getItem('ratio')) {
            ratio = localStorage.getItem('ratio');
        } else {
            ratio = 1.375;
            localStorage.setItem('ratio', 1.375);
        }
        function calcTotal() {
            if (!sex || !height || !weight || !age || !ratio) {
                result.textContent = '';
                return;
            }
            if (sex === 'female') {
                result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
            } else {
                result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
            }
        }
        calcTotal();

        function initLocalSettings(selector, activeClass) {
            const elements = document.querySelectorAll(selector);
            elements.forEach(elem => {
                elem.classList.remove(activeClass);
                if (elem.getAttribute('id') === localStorage.getItem('sex')) {
                    elem.classList.add(activeClass);
                }
                if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                    elem.classList.add(activeClass);
                }
            });
        }

        initLocalSettings('#gender div', 'calculating__choose-item_active');
        initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

        function getStaticInformation(selector, activeClass) {
            const elements = document.querySelectorAll(selector);
            elements.forEach(elem => {
                elem.addEventListener('click', (e) => {
                    if (e.target.getAttribute('data-ratio')) {
                        ratio = +e.target.getAttribute('data-ratio');
                        localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
                    } else {
                        sex = e.target.getAttribute('id');
                        localStorage.setItem('sex', e.target.getAttribute('id'));
                    }
                    elements.forEach(elem => {
                        elem.classList.remove(activeClass);
                    });
                    e.target.classList.add(activeClass);
                    calcTotal();
                });
            });
        }

        getStaticInformation('#gender div', 'calculating__choose-item_active');
        getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');

        function getDynamicInformation(selector) {
            const input = document.querySelector(selector);
            input.addEventListener('input', () => {
                if (input.value.match(/\D/g)) {
                    input.style.border = "3px solid red";
                } else {
                    input.style.border = 'none';
                }
                switch (input.getAttribute('id')) {
                    case "height":
                        height = +input.value;
                        break;
                    case "weight":
                        weight = +input.value;
                        break;
                    case "age":
                        age = +input.value;
                        break;
                }
                calcTotal();
            });
        }

        getDynamicInformation('#height');
        getDynamicInformation('#weight');
        getDynamicInformation('#age');
    }

    // TIMER 
    function timer(id, deadline) {

        function getTimeRemaining(endtime) {
            const t = Date.parse(endtime) - Date.parse(new Date());
            const days = Math.floor(t / (1000 * 60 * 60 * 24));
            const hours = Math.floor((t / (1000 * 60 * 60) % 24));
            const minutes = Math.floor((t / 1000 / 60) % 60);
            const seconds = Math.floor((t / 1000) % 60);
            return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        }

        function getZero(num) {
            if (num >= 0 && num < 10) {
                return `0${num}`;
            } else {
                return num;
            }
        }

        function setClock(selector, endtime) {
            const timer = document.querySelector(selector),
                days = timer.querySelector('#days'),
                hours = timer.querySelector('#hours'),
                minutes = timer.querySelector('#minutes'),
                seconds = timer.querySelector('#seconds'),
                timeInterval = setInterval(updateClock, 1000);
            updateClock();
            function updateClock() {
                const t = getTimeRemaining(endtime);
                days.innerHTML = getZero(t.days);
                hours.innerHTML = getZero(t.hours);
                minutes.innerHTML = getZero(t.minutes);
                seconds.innerHTML = getZero(t.seconds);
                if (t.total <= 0) {
                    clearInterval(timeInterval);
                }
            }
        }
        setClock(id, deadline);
    };

    // TABS 
    function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
        const tabs = document.querySelectorAll(tabsSelector),
            tabsContent = document.querySelectorAll(tabsContentSelector),
            tabsParent = document.querySelector(tabsParentSelector);
        function hideTabContent() {
            tabsContent.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('show', 'fade');
            });
            tabs.forEach(item => {
                item.classList.remove(activeClass);
            });
        }
        function showTabContent(i = 0) {
            tabsContent[i].classList.add('show', 'fade');
            tabsContent[i].classList.remove('hide');
            tabs[i].classList.add(activeClass);
        }
        hideTabContent();
        showTabContent();

        tabsParent.addEventListener('click', (event) => {
            const target = event.target;
            if (target && target.classList.contains(tabsSelector.slice(1))) {
                tabs.forEach((item, i) => {
                    if (target == item) {
                        hideTabContent(i);
                        showTabContent(i);
                    }
                });
            }
        });

    }

    // SLIDER 
    function slider({ container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field }) {
        const slides = document.querySelectorAll(slide),
            slider = document.querySelector(container),
            prev = document.querySelector(prevArrow),
            next = document.querySelector(nextArrow),
            total = document.querySelector(totalCounter),
            current = document.querySelector(currentCounter),
            slidesWrapper = document.querySelector(wrapper),
            slidesField = document.querySelector(field),
            width = window.getComputedStyle(slidesWrapper).width;
        let slideIndex = 1;
        let offset = 0;

        if (slides.length < 10) {
            total.textContent = `0${slides.length}`;
            current.textContent = `0${slideIndex}`;
        } else {
            total.textContent = slides.length;
            current.textContent = slideIndex;
        }
        slidesField.style.width = 100 * slides.length + '%';
        slidesField.style.display = 'flex'
        slidesField.style.transition = '0.5s all';
        slidesWrapper.style.overflowX = 'hidden'
        slides.forEach(slide => {
            slide.style.width = width;
        })
        function deleteNotDigits(str) {
            return +str.replace(/\D/g, '');
        }
        next.addEventListener('click', () => {
            if (offset == deleteNotDigits(width) * (slides.length - 1)) {
                offset = 0
            } else {
                offset += deleteNotDigits(width);
            }
            slidesField.style.transform = `translateX(-${offset}px)`
            if (slideIndex == slides.length) {
                slideIndex = 1
            } else {
                slideIndex++;
            }
            if (slides.length < 10) {
                current.textContent = `0${slideIndex}`;
            } else {
                current.textContent = slideIndex;
            }
        })

        prev.addEventListener('click', () => {
            if (offset == 0) {
                offset = deleteNotDigits(width) * (slides.length - 1)
            } else {
                offset -= deleteNotDigits(width);
            }
            slidesField.style.transform = `translateX(-${offset}px)`
            if (slideIndex == 1) {
                slideIndex = slides.length
            } else {
                slideIndex--;
            }
            if (slides.length < 10) {
                current.textContent = `0${slideIndex}`;
            } else {
                current.textContent = slideIndex;
            }
        })
    };
    // OPEN AND CLOSE MODAL 
    function openModal(modalSelector, modalTimer) {
        const modal = document.querySelector(modalSelector);
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        if (modalTimer) {
            clearInterval(modalTimer);
        }
    }
    function closeModal(modalSelector) {
        const modal = document.querySelector(modalSelector);
        modal.classList.remove('show');
        modal.classList.add('hide');
        document.body.style.overflow = '';
    }

    // MODAL 
    function popup(triggerButtons, modalSelector, modalTimer) {
        const modal = document.querySelector(modalSelector),
            btns = document.querySelectorAll(triggerButtons),
            dialog = document.querySelector('.modal__dialog');
        btns.forEach(item => {
            item.addEventListener('click', () => openModal(modalSelector, modalTimer))
        })
        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.getAttribute('data-close') == '') {
                closeModal(modalSelector);
            }
            document.addEventListener('keydown', (e) => {
                if (e.code === 'Escape' && modal.classList.contains('show')) {
                    closeModal(modalSelector);
                }
            })
        })
        function showModalByScroll() {
            if ((window.pageYOffset + document.documentElement.clientHeight) >= document.documentElement.scrollHeight - 2) {
                openModal(modalSelector, modalTimer);
                window.removeEventListener('scroll', showModalByScroll);
            }
        }
        window.addEventListener('scroll', showModalByScroll);
    };

    // FORM 
    function forms(formSelector, modalTimer) {
        const forms = document.querySelectorAll(formSelector);
        const message = {
            loading: 'img/form/spinner.svg',
            success: 'Спасибо,скоро мы с Вами свяжемся',
            failure: 'Что-то пошло не так'
        }
        forms.forEach(item => {
            bindPostData(item);
        })
        function bindPostData(form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const statusMessage = document.createElement('img');
                statusMessage.src = message.loading;
                statusMessage.style.cssText = `
            display:block;
            margin: 0 auto;
            `;
                form.insertAdjacentElement('afterend', statusMessage);
                const formData = new FormData(form);//Всегда нужен атрибут name
                const json = JSON.stringify(Object.fromEntries(formData.entries()))
                postData('/requests', json)
                    .then((data) => {
                        showThanks(message.success);
                        statusMessage.remove();
                    }).catch(() => {
                        showThanks(message.failure);
                    }).finally(() => {
                        form.reset();
                    })
            });
        }
        function showThanks(message) {
            const prevModalDialog = document.querySelector('.modal__dialog');
            prevModalDialog.classList.add('hide');
            openModal('.modal', modalTimer);
            const thanksModal = document.createElement('div');
            thanksModal.classList.add('modal__dialog');
            thanksModal.innerHTML = `
        <div class="modal__content">
        <div class="modal__close" data-close>&times;</div>
        <div class="modal__title">${message}</div>
        </div>`;
            document.querySelector('.modal').append(thanksModal);
            setTimeout(() => {
                thanksModal.remove();
                prevModalDialog.classList.remove('hide');
                prevModalDialog.classList.add('show');
                closeModal('.modal');
            }, 4000)
        }
        fetch('/menu').then((data) => data.json())
    };
    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });
        return await res.json();
    };

    // CALL FUNCTIONS 

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    // popup('[data-modal]', '.modal', modalTimer);
    popup('[data-modal]', '.modal');
    timer('.timer', '2022-08-11');
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        slide: '.offer__slide',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner',
    });
    // forms('form', modalTimer);
    forms('form');
    calculate();
});

