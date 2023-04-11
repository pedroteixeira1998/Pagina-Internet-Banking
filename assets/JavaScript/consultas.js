const spanClient = document.querySelector('.client');
const spanHour = document.querySelector('.spanhour');
const spanDay = document.querySelector('.spanday');



spanClient.innerHTML = localStorage.getItem('client');
spanHour.innerHTML = localStorage.getItem('selectedHour');
spanDay.innerHTML = localStorage.getItem('selectedDay');