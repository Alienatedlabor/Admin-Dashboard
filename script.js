let today = new Date();
let greeting = document.querySelector('.hi');

let hours = today.getHours();

if (hours >= 16) {
  greeting.textContent = 'Good evening,';
} else if (hours >= 12 && hours < 16) {
  greeting.textContent = 'Good afternoon,';
} else {
  greeting.textContent = 'Good morning,';
}
