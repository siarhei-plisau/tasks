function creatForm () {
  const form = document.createElement('form');
  const labelInputData = document.createElement('label');
  const labelInputSeconds = document.createElement('label');
  const button = document.createElement('button');

  button.setAttribute('type', 'button');
  button.innerHTML = 'show result';

  labelInputData.insertAdjacentHTML('beforeend', `<input type="text" id="data"> data <br> `);
  labelInputSeconds.insertAdjacentHTML('beforeend', `<input type="number" id="seconds"> seconds<br>`);
  form.append(labelInputData, labelInputSeconds, button);
  return form;
}

function getMessageCallback(message, seconds = 0, callback) {
  if ( !message ) {
    callback(new Error('something went wrong!'));
    return;
  }
  setTimeout(() => callback(null, message), seconds*1000);
}

function getMessagePromise (message, seconds = 0) {
  return new Promise((resolve, reject) => {
    if ( !message ) reject(new Error('something went wrong!'));
    setTimeout(() => resolve(message), seconds*1000);
  })
}

async function getMessageAsyncAwait(message, seconds = 0) {
  try {
    if ( !message ) throw new SyntaxError();
    let promise = new Promise ( resolve => {
      setTimeout(() => resolve(message), seconds*1000);
    } );
    const result = await promise;
    alert(`Async/Await: ${result}`);
  } catch(error) {
    console.log(`Async/Await: something went wrong!`);
  }
}

function handlerClick(e) {
  const message = document.getElementById('data').value;
  const seconds = document.getElementById('seconds').value;

  getMessageCallback(message, +seconds, (error, message) => {
    error ? console.log(`Callback: ${error.message}`) : alert(`CallBack: ${message}`);
  });

  getMessagePromise(message, seconds)
    .then( result => alert(`Promise:${result}`))
    .catch( error => console.log(`Promise: ${error.message}`));

  getMessageAsyncAwait(message, seconds);  

}

document.body.prepend( creatForm() );
const button = document.querySelector('button');
button.addEventListener('click', handlerClick);

