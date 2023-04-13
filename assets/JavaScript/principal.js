// Selecionar elementos do DOM
const spanClient = document.querySelector('.client');
spanClient.innerHTML = localStorage.getItem('client');
const days = document.querySelector('.days');
const openModalButton = document.querySelectorAll('.mark');
const save = document.querySelector('#save');
const modal = document.querySelector('#modal');
const weekdays = document.querySelector('.weekdays');
const fade = document.querySelector('#fade');

// Definir variáveis e arrays
let consultasMarcadas = [];

const horas = [
  '09:00',
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
  '15:30'
];

const weekday = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

// Adicionar elementos de dias da semana ao calendário
weekday.forEach(wd => {
  const divw = document.createElement('div');
  divw.classList.add('weekday');
  divw.textContent = wd;
  weekdays.appendChild(divw);
});

// Adicionar elementos de horas ao modal
horas.forEach(hour => {
  const div = document.createElement('div');
  div.classList.add('hour');
  div.textContent = hour;
  modal.appendChild(div);
});

// Obter o número de dias do mês atual e criar elementos de dias do mês
const date = new Date();
const month = date.getMonth();
const year = date.getFullYear();
const daysInMonth = new Date(year, month + 1, 0).getDate();

for (let i = 1; i <= daysInMonth; i++) {
  const day = document.createElement('div');
  day.classList.add('day');
  day.textContent = i;
  days.appendChild(day);
};

// Selecionar elementos do calendário que são dias e horas
const wdays = document.querySelectorAll('.day');
const whorario = document.querySelectorAll('.hour');

// Funções para selecionar dia e hora e adicionar a classe 'card-mark'
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

// Adicionar evento de clique em cada dia e hora do calendário
wdays.forEach(day => {
  day.addEventListener('click', () => {
    selectDay(day);
    toggleModal();
  });
});

whorario.forEach(hour => {
  hour.addEventListener('click', () => {
    selectHour(hour);
  });
});

// Função para abrir e fechar o modal
const toggleModal = () => {
  modal.classList.toggle('hide');
  fade.classList.toggle('hide');
  };

  fade.addEventListener('click', () => {
      toggleModal();
  });

// openModalButton.forEach(el => {
//   el.addEventListener('click', () => toggleModal());
// });

// Declaração de funções
function resetPage() {
  const selectedDay = document.querySelector('.day.card-mark');
  const selectedHour = document.querySelector('.hour.card-mark');
  
  if (selectedDay) {
    selectedDay.classList.remove('card-mark');
  }
  
  if (selectedHour) {
    selectedHour.classList.remove('card-mark');
  }

  modal.classList.add('hide');
  fade.classList.add('hide');
}

function reset(){
  consultasMarcadas =[];
  resetPage();
}

// Evento de clique no botão save
save.addEventListener('click', function() {
  const selectedDate = document.querySelector('.day.card-mark').textContent;
  const selectedHour = document.querySelector('.hour.card-mark').textContent;
  
  const consulta = {
    dia: selectedDate,
    hora: selectedHour
  };

  consultasMarcadas.push(consulta);

  localStorage.setItem('consultas', JSON.stringify(consulta));
  localStorage.setItem('selectedDay', selectedDate);
  localStorage.setItem('selectedHour', selectedHour);

  const table = document.querySelector('#consultasMarcadas');

  consultasMarcadas.forEach(consulta => {
    const row = document.createElement('tr');
    const cellDia = document.createElement('td');
    const cellHora = document.createElement('td');
    const cellCancel = document.createElement('td');
    const icon = document.createElement('span');
    cellDia.textContent = consulta.dia;
    cellHora.textContent = consulta.hora;
    icon.textContent = 'event_busy';
    cellDia.classList.add('tab');
    cellHora.classList.add('tab');
    cellCancel.classList.add('tab');
    icon.classList.add('material-symbols-outlined');
    
    row.appendChild(cellDia);
    row.appendChild(cellHora);
    row.appendChild(cellCancel);
    cellCancel.appendChild(icon);
    table.appendChild(row);

    function removeItem() {
      const index = 1; // substitua pelo índice do item a ser removido
      consultasMarcadas.splice(index, 1);
      const rowToRemove = document.querySelector(`#consultasMarcadas tr:nth-child(${index + 1})`);
      rowToRemove.remove();
      console.log(consultasMarcadas);
    }
    cellCancel.addEventListener('click', removeItem)
  });

  reset();
});



// Criação da tabela de consultas marcadas
const table = document.querySelector('#consultasMarcadas');
consultasMarcadas.forEach(consulta => {
  const row = document.createElement('tr');
  const cellDia = document.createElement('td');
  const cellHora = document.createElement('td');
  cellDia.textContent = consulta.dia;
  cellHora.textContent = consulta.hora;
  row.appendChild(cellDia);
  row.appendChild(cellHora);
  table.appendChild(row);
});








