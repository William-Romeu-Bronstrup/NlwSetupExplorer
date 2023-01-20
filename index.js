const form = document.querySelector("form");
const button = document.querySelector(".registerDay");
const nlwSetup = new NLWSetup(form);

button.addEventListener('click', add)
form.addEventListener('change', save)

function add() {
  
  const today = new Date().toLocaleDateString('pt-br').slice(0, 5);

  const dayExists = nlwSetup.dayExists(today);

  if(dayExists) {
    alert('Dia já incluso')
    return;
  }

  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem('day', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem('day')) || {}
nlwSetup.setData(data);
nlwSetup.load()