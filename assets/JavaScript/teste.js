var days = document.querySelector('.days');

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