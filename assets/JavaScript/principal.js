//Nome do Cliente
const spanClient = document.querySelector('.client');

const btn = document.querySelector('.mark');
const todas = document.querySelector('.all-hours');
const grid = document.querySelector('.grid');


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

//Array dias
const days = ['Segunda-feira',
'Terça-feira',
'Quarta-feira',
'Quinta-feira',
'Sexta-feira'];

//Criar divs
function createdivs(){
  for (let i = 0; i < 1; i++) {
    const tabela = document.createElement('div');
    tabela.classList.add('tb-hours');

    for (let j = 0; j < horas.length; j++) {
      const hour = document.createElement('div');
      hour.classList.add('hour');
      hour.textContent = horas[j];
      tabela.appendChild(hour);
    }



    todas.appendChild(tabela);
  }

  for (let i = 0; i < days.length; i++) {
    const day = document.createElement('div');
    day.classList.add('day');
    day.textContent = days[i];
    grid.appendChild(day);
  }
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
  const allDays = grid.querySelectorAll('.day');
  const selectDay = (element) =>{
    allDays.forEach(day => {
      day.classList.remove('card-mark');
      });
      element.classList.add('card-mark');
  }
  
  
  allDays.forEach((day => {
    day.addEventListener('click', () => {
      selectDay(day);
    })
  }))
  
  }

  
  //Salvar Hora no LS
  function saveLs(event){
    btn.addEventListener('click', () =>{

      const selectHour = todas.querySelector('.card-mark').textContent;
      const selectDay = grid.querySelector('.card-mark').textContent;
      localStorage.setItem('hora-marcada', selectHour);
      localStorage.setItem('dia-marcada', selectDay);

      window.location = 'assets/pages/principal.html'
  });
};

window.onload = () =>{
  spanClient.innerHTML = localStorage.getItem('client');

  createdivs();
  selectElements();
  saveLs();
}







