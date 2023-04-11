//Nome do Cliente
const spanClient = document.querySelector('.client');

var days = document.querySelector('.days');
const openModalButton = document.querySelectorAll(".mark");
const save = document.querySelector('#save');
const modal = document.querySelector('#modal');



//Array horas
const horas = ['09:00', 
'10:00', 
'11:00', 
'12:00', 
'13:00', 
'14:00', 
'15:00',
'09:30',
'10:30',
'11:30',
'12:30',
'13:30',
'14:30',
'15:30'];

horas.forEach(hour => {
  const div = document.createElement('div');
  div.classList.add('hour');
  div.textContent = hour;
  modal.appendChild(div);
});



// Obtenha o número de dias do mês atual
var date = new Date();
var month = date.getMonth();
var year = date.getFullYear();
var daysInMonth = new Date(year, month + 1, 0).getDate();

// Crie as divs dos dias do mês
for (var i = 1; i <= daysInMonth; i++) {
  var day = document.createElement('div');
  day.classList.add('day');
  day.textContent = i;
  days.appendChild(day);
}

// Seleciona todos os elementos do calendário que são dias
const wdays = document.querySelectorAll('.day');
const whorario = document.querySelectorAll('.hour');

// Função para adicionar a classe 'card-mark' ao dia selecionado e remover dos demais dias
function selectDay(element) {
  wdays.forEach(day => {
    day.classList.remove('card-mark');
  });
  element.classList.add('card-mark');
}

function selectHour(element) {
  whorario.forEach(hour => {
    hour.classList.remove('card-mark');
  });
  element.classList.add('card-mark');
}
// Adiciona um evento de clique em cada dia do calendário
wdays.forEach(day => {
  day.addEventListener('click', () => {
    selectDay(day);
  });
});

whorario.forEach(hour => {
  hour.addEventListener('click', () => {
    selectHour(hour);
  });
});


const toggleModal = () =>{
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

openModalButton.forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});

save.addEventListener('click', function() {
  const selectedDate = document.querySelector('.day.card-mark').textContent;

  const selectedHour = document.querySelector('.hour.card-mark').textContent;

  localStorage.setItem('selectedDay', selectedDate);
  localStorage.setItem('selectedHour', selectedHour);

  alert(`Consulta: Dia: ${selectedDate}, as ${selectedHour} horas. Obrigado`)

  window.location = '../pages/confirmar.html'
})

window.onload = () =>{
  spanClient.innerHTML = localStorage.getItem('client');
}









