import {response} from './response.js';
import {httpGet} from './task2.js';



function handlerClick(e) {
  e.target.disabled = true;
  showPreloader();
  httpGet('https://learn.javascript.ru/', response)
  .finally( () => deletePreloader())
  .then( result => createListResult(result))
  .catch( error => {
    showError(error);
    deleteError(this);
    });
  
}

function createListResult(result) {
  if ( result.data.lenght === 0 ) return;
  const resultTable = document.createElement('table');
  resultTable.className = 'resultTable';
  resultTable.insertAdjacentHTML('beforeend',
    `<tr>
      <th>№</th>
      <th>Name</th>
      <th>Salary</th>
      <th>Age</th>
      <th>Photo</th>
    </tr>`);
  result.data.forEach( item => {
    resultTable.insertAdjacentHTML('beforeend',
    `<tr>
      <td>${item.id}</td>
      <td>${item.employee_name}</td>
      <td>${item.employee_salary}</td>
      <td>${item.employee_age}</td>
      <td>${item.profile_image || 'no photo'}</td>
    </tr>`);
  } );
  const container = document.getElementById('root');
  container.append(resultTable);
}

function deleteError(button) {
  const errorMessage = document.querySelector('.error');
  const timerId = setInterval(() => {
    errorMessage.hidden = !errorMessage.hidden;
  }, 500);
  setTimeout(() => {
    clearInterval(timerId);
    errorMessage.remove();
    button.disabled = false;
  }, 2500);
  
}

function showError(error) {
  const errorMessage = document.createElement('div');
  errorMessage.className = 'error';
  errorMessage.textContent = error.message;
  const container = document.getElementById('root');
  container.append(errorMessage);
  
}

function showPreloader() {
  const wrapper = document.createElement('div');
  const spinner = document.createElement('div');
  wrapper.append(spinner);
  wrapper.className = 'wrapperPreloader';
  spinner.className = 'spinnerPulse';
  const container = document.getElementById('root');
  container.append(wrapper);
}

function deletePreloader() {
  const wrapper = document.querySelector('.wrapperPreloader');
  wrapper.remove();
}

function createButton() {
  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.className = 'buttonResult';
  button.innerHTML = 'show result';
  const container = document.getElementById('root');
  container.append(button);
  button.addEventListener('click', handlerClick);
}

createButton();

