// function timer(id, deadline) {
//     // timer
//     debugger

//     function getTimeRemaining(endtime) {
//         const t = Date.parse(endtime) - Date.parse(new Date());
//         const days = Math.floor(t / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((t / (1000 * 60 * 60) % 24));
//         const minutes = Math.floor((t / 1000 / 60) % 60);
//         const seconds = Math.floor((t / 1000) % 60);
//         debugger
//         return {
//             'total': t,
//             'days': days,
//             'hours': hours,
//             'minutes': minutes,
//             'seconds': seconds
//         };
//     }

//     function getZero(num) {
//         if (num >= 0 && num < 10) {
//             return `0${num}`;
//         } else {
//             return num;
//         }
//     }

//     function setClock(selector, endtime) {
//         const timer = document.querySelector(selector),
//             days = timer.querySelector('#days'),
//             hours = timer.querySelector('#hours'),
//             minutes = timer.querySelector('#minutes'),
//             seconds = timer.querySelector('#seconds'),
//             timeInterval = setInterval(updateClock, 1000);
//         updateClock();
//         function updateClock() {
//             debugger
//             const t = getTimeRemaining(endtime);
//             days.innerHTML = getZero(t.days);
//             hours.innerHTML = getZero(t.hours);
//             minutes.innerHTML = getZero(t.minutes);
//             seconds.innerHTML = getZero(t.seconds);
//             if (t.total <= 0) {
//                 clearInterval(timeInterval);
//             }
//         }
//     }
//     setClock(id, deadline);
// };
// export default timer;