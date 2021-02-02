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

// appoinment-form
let formInputLabels = document.querySelectorAll('.form-input-label');

function getData(data) {
  formInputLabels.forEach((formInputLabel) => {
    let dataAttributeName = data.getAttribute('name');
    let labelAttributeName = formInputLabel.getAttribute('name');

    if (dataAttributeName === labelAttributeName) {
      if (data.getAttribute('name') === dataAttributeName) {
        data.value.length
          ? formInputLabel.classList.add('shrink')
          : formInputLabel.classList.remove('shrink');
      }
    }
  });
}

let appoCloseBtn = document.querySelector('.appo-close');
let appoBtn = document.querySelector('.appo-btn');
let appoinment = document.querySelector('.appoinment');
let appoBg = document.querySelector('.appo-bg');
let appoMobBtn = document.querySelector('.appo-mob-btn');

appoBtn.addEventListener('click', () => {
  appoinment.classList.add('appo-show');
  appoBg.style.display = 'block';
});

appoMobBtn.addEventListener('click', () => {
  appoinment.classList.add('appo-show');
  appoBg.style.display = 'block';
});

appoCloseBtn.addEventListener('click', () => {
  appoinment.classList.remove('appo-show');
  appoBg.style.display = 'none';
});
