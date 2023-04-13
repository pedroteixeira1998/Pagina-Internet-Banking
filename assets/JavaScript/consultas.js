const spanClient = document.querySelector('.client');
spanClient.innerHTML = localStorage.getItem('client');

const table = document.querySelector('#consultasMarcadas');

function createTab(){
    const selectDay = localStorage.getItem('selectedDay');
    const selectHour = localStorage.getItem('selectedHour');
    const row = document.createElement('tr');
    const cellDia = document.createElement('td');
    const cellHora = document.createElement('td');
    cellDia.textContent = selectDay;
    cellHora.textContent = selectHour;
    cellDia.classList.add('tab');
    cellHora.classList.add('tab');
    row.appendChild(cellDia);
    row.appendChild(cellHora);
    table.appendChild(row);
};

createTab();


