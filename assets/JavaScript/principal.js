//Nome do Cliente
const spanClient = document.querySelector('.client');

const btn = document.querySelector('.mark');
const todas = document.querySelector('.all-hours');
var days = document.querySelector('.days');


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

//Selecionar Elementos
function selectElements(){
  const hours = todas.querySelectorAll('.hour');
  const selectHour = (element) => {
      hours.forEach(hour => {
        hour.classList.remove('card-mark');
      });
      element.classList.add('card-mark');
    }
    
    hours.forEach(hour => {
      hour.addEventListener('click', () => {
        selectHour(hour);
      });
    });
  }

// Seleciona todos os elementos do calendário que são dias
const wdays = document.querySelectorAll('.day');

// Função para adicionar a classe 'card-mark' ao dia selecionado e remover dos demais dias
function selectDay(element) {
  wdays.forEach(day => {
    day.classList.remove('card-mark');
  });
  element.classList.add('card-mark');
}

// Adiciona um evento de clique em cada dia do calendário
wdays.forEach(day => {
  day.addEventListener('click', () => {
    selectDay(day);
  });
});

  
  //Salvar Hora no LS
  function saveLs(event){
    btn.addEventListener('click', () =>{

      const selectDay = day.querySelectorAll('.card-mark').innerHTML
      localStorage.setItem('dia-marcada', selectDay);

      window.alert(`Sua consulta será dia ${selectDay}`)
      window.location = '../pages/confirmar.html'
  });
};

window.onload = () =>{
  spanClient.innerHTML = localStorage.getItem('client');

  selectElements();
  saveLs();
}







