let select = document.querySelector('select');
let list = document.querySelector('ul');
let h2 = document.querySelector('h2');

select.onchange = function() {
 let choice = select.value;
 let days = 31;
 if(choice === 'Февраль') {
 days = 28;
 } else if(choice === 'Апрель' || choice === 'Июнь' || choice === 'Сентябрь'|| choice === 'Ноябрь') {
 days = 30;
 }

 createCalendar(days, choice);
};

function createCalendar(days, choice) {
 list.innerHTML = '';
 h2.textContent = choice;
 for(let i = 1; i <= days; i++) {
let listItem = document.createElement('li');
 listItem.textContent = i;
 list.appendChild(listItem);
 }
 }

createCalendar(31,'Январь');