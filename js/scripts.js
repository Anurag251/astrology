// date&time
function updateClock() {
  let now = new Date();
  let day = now.getDay(),
    month = now.getMonth(),
    date = now.getDate(),
    year = now.getFullYear(),
    hour = now.getHours(),
    minute = now.getMinutes(),
    second = now.getSeconds();

  let months = [
    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun',
    'jul',
    'aug',
    'sep',
    'oct',
    'nov',
    'dec',
  ];
  let week = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  let ids = ['day', 'date', 'month', 'year', 'hour', 'minute', 'second'];
  let values = [week[day], months[month], date, year, hour, minute, second];

  for (let i = 0; i < ids.length; i++)
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function initClock() {
  updateClock();
  window.setInterval('updateClock()', 1);
}

// navbar-stickey
const navbar = document.querySelector('.navbars');
window.onscroll = () => {
  this.scrollY > 250
    ? navbar.classList.add('sticky')
    : navbar.classList.remove('sticky');
};
