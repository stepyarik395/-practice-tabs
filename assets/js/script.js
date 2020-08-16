
let tablinks = document.getElementsByClassName('tablinks');
for (let i = 0; i < tablinks.length; i++) {
  tablinks[i].addEventListener('click', handleClick)
}
function handleClick(event) {
  let currentCity = event.target.dataset.city;
  let tabcontent = document.querySelectorAll('.tabcontent');
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none"
  }
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove('active')
  }
  event.target.classList.add('active')
  document.getElementById(currentCity).style.display = "block"
}