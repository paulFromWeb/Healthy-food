import { closeModal, openModal } from './popup';
import { postData } from '../services/services';
function forms(formSelector, modalTimer) {
    //Forms 
    const forms = document.querySelectorAll(formSelector);
    console.log(forms)
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
            // const request = new XMLHttpRequest();
            // request.open('POST', 'server.php');
            const formData = new FormData(form);//Всегда нужен атрибут name
            const json = JSON.stringify(Object.fromEntries(formData.entries()))


            postData('/requests', json)
                .then((data) => {
                    console.log(data);
                    showThanks(message.success);

                    statusMessage.remove();
                }).catch(() => {
                    showThanks(message.failure);
                }).finally(() => {
                    form.reset();
                })
            // request.send(formData);

            // request.addEventListener('load', () => {
            //     if (request.status === 200) {
            //         showThanks(message.success);
            //         form.reset();
            //         statusMessage.remove();

            //     } else {
            //         showThanks(message.failure);
            //     }
            // })
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
    </div>
    
    `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.remove('hide');
            prevModalDialog.classList.add('show');
            closeModal('.modal');
        }, 4000)
    }
    fetch('/menu')
        .then((data) => data.json())
        .then(res => console.log(res));

};
export default forms;
