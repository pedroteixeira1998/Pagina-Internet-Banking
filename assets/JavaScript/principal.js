const spanClient = document.querySelector('.client');
spanClient.innerHTML = localStorage.getItem('client');

const todas = document.querySelector('.all-hours');
const horas = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'];

for (let i = 0; i < 5; i++) {
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




