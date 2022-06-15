// function openModal(modalSelector, modalTimer) {
//     const modal = document.querySelector(modalSelector);
//     modal.classList.add('show');
//     modal.classList.remove('hide');
//     document.body.style.overflow = 'hidden';
//     console.log(modalTimer)
//     if (modalTimer) {
//         clearInterval(modalTimer);
//     }

// }
// function closeModal(modalSelector) {
//     const modal = document.querySelector(modalSelector);
//     modal.classList.remove('show');
//     modal.classList.add('hide');
//     document.body.style.overflow = '';
// }
// function popup(triggerButtons, modalSelector, modalTimer) {

//     //Pop up
//     const modal = document.querySelector(modalSelector),
//         btns = document.querySelectorAll(triggerButtons),
//         dialog = document.querySelector('.modal__dialog');


//     btns.forEach(item => {
//         item.addEventListener('click', () => openModal(modalSelector, modalTimer))
//     })


//     modal.addEventListener('click', (e) => {
//         if (e.target === modal || e.target.getAttribute('data-close') == '') {
//             closeModal(modalSelector);
//         }
//         document.addEventListener('keydown', (e) => {
//             if (e.code === 'Escape' && modal.classList.contains('show')) {
//                 closeModal(modalSelector);
//             }
//         })
//     })


//     function showModalByScroll() {
//         if ((window.pageYOffset + document.documentElement.clientHeight) >= document.documentElement.scrollHeight - 2) {
//             openModal(modalSelector, modalTimer);
//             window.removeEventListener('scroll', showModalByScroll);
//         }
//     }
//     window.addEventListener('scroll', showModalByScroll);
// };
// export default popup;

// export { closeModal };
// export { openModal };