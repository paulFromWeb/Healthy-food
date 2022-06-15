// import { getResource } from '../services/services';

// function cards() {
//     //Классы
//     class MenuElements {
//         constructor(img, title, text, price, selector, ...classes) {
//             this.img = img;
//             this.title = title;
//             this.text = text;
//             this.parent = document.querySelector(selector);
//             this.price = price;
//             this.classes = classes;
//             this.transform = 74;
//             this.changeToRub();
//         }
//         changeToRub() {
//             this.price = this.price * this.transform;
//         }
//         render() {
//             const element = document.createElement('div');
//             if (this.classes.length === 0) {
//                 this.element = 'menu__item';
//                 element.classList.add(this.element);
//             } else {
//                 this.classes.forEach(className => {
//                     element.classList.add(className);
//                 });
//             }

//             element.innerHTML = `
       
//          <img src=${this.img}>
//          <h3 class="menu__item-subtitle">${this.title}</h3>
//          <div class="menu__item-descr">${this.text} </div>
         
//          <div class="menu__item-price">
//              <div class="menu__item-cost">Цена:</div>
//              <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
//          </div>
     
//         `;
//             this.parent.append(element);
//         }
//     }


//     getResource('/menu')
//         .then(data => {
//             data.forEach(({ img, title, descr, price }) => {
//                 new MenuElements(img, title, descr, price, '.menu .container').render();
//             })
//         })
// };
// export default cards;