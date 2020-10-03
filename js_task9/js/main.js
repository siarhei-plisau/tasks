const userDataForPost = {"userId": 3,"title": "MY BEST REGURDS!","body":"HI,EVERYBODY!"};

showUrl();

const form = document.querySelector('#formSelectUrl');
form.addEventListener('change', showUrl);

const selectionsGet = document.querySelector('#sectionGet');
selectionsGet.addEventListener('change', checkValue);

const getXMLHttpRequest = document.querySelector('.getXMLHttpRequest');
getXMLHttpRequest.addEventListener('click', handlerGetXmlHttpButtonClick);

const getFetchRequest = document.querySelector('.getFetchRequest');
getFetchRequest.addEventListener('click', handlerGetFetchRequestButtonClick);

const textareaPost = document.querySelector('#textareaPost');
textareaPost.addEventListener('input', handlerInputTextArea);

const postXmlHttpRequestButton = document.querySelector('.postXmlHttpRequestButton');
postXmlHttpRequestButton.addEventListener('click', handlerPostXmlHttpButtonClick);

const postFetchRequestButton = document.querySelector('.postFetchRequestButton');
postFetchRequestButton.addEventListener('click', handlerPostFetchButtonClick);

const deleteXMLHttpRequestButton = document.querySelector('.deleteXMLHttpRequestButton');
deleteXMLHttpRequestButton.addEventListener('click', handlerDeleteXmlHttpButtonClick);

const deleteFetchRequestButton = document.querySelector('.deleteFetchRequestButton');
deleteFetchRequestButton.addEventListener('click', handlerDeleteFetchButtonClick);

function showUrl() {
const currentUrl =  document.querySelector('.currentUrl');
currentUrl.innerHTML = creatUrl();
 
}

function checkValue() {
  let idUser = document.getElementById('idUser');
  if ( !getSectionValue() ) {
    idUser.value = '';
    idUser.disabled = true;
  } else idUser.disabled = false;
}

function getSectionValue() {
  const selectionsGet = document.querySelector('#sectionGet');
  return selectionsGet.value;
}

function getSubsectionValue() {
  const subSelectionsGet = document.querySelector('#subSection');
  return subSelectionsGet.value;
}

function getValueIdUser() {
  const value = document.getElementById('idUser').value;
  return value;
}

function clearContainerResponse() {
  const container = document.querySelector('.containerResponse');
  container.innerHTML = '';
}
function showPreloader() {
  const container = document.querySelector('.containerResponse');
  const wrapper = document.createElement('div');
  const spinner = document.createElement('div');
  wrapper.append(spinner);
  wrapper.className = 'wrapperPreloader';
  spinner.className = 'spinnerPulse';
  container.append(wrapper);
}

function deletePreloader() {
  const wrapper = document.querySelector('.wrapperPreloader');
  wrapper.remove();
}

function handlerInputTextArea() {
  textareaPost.style.color ='grey';
}

function creatUrl() {
  const sectionUser = getSectionValue();
  const subSection = getSubsectionValue()
  let valueIdUser = getValueIdUser();
  sectionUser && valueIdUser ? valueIdUser += '/' : valueIdUser;
  return `https://jsonplaceholder.typicode.com/${sectionUser}${valueIdUser}${subSection}`
}

async function handlerGetFetchRequestButtonClick(e) {
  clearContainerResponse();
  showPreloader();
  let response = await fetch( creatUrl() );
  if ( response.ok ) {
    const json = await response.json();
    deletePreloader();
    createListResult(json);
  } else {
    deletePreloader();
    showError(response);
  }
}

async function handlerPostFetchButtonClick() {
  const textareaPost = document.querySelector('#textareaPost');
  clearContainerResponse();
  showPreloader();
  let response = await fetch( creatUrl(), {
    method: 'POST', 
    headers: { 
      'Content-Type': 'application/json;charset=utf-8' 
    }, 
    body: textareaPost.value
  });
  if ( response.ok ) {
    const json = await response.json();
    deletePreloader();
    createListResult(json);
  } else {
    deletePreloader();
    showError(response);
  }
}

async function handlerDeleteFetchButtonClick() {
  clearContainerResponse();
  showPreloader();
  let response = await fetch( creatUrl(), { method: 'DELETE' });
  if ( response.ok ) {
    deletePreloader();
    const container = document.querySelector('.containerResponse');
    container.innerHTML = `${creatUrl()} was successfully deleted!`;
  } else {
    deletePreloader();
    showError(response);
  }
}

function handlerGetXmlHttpButtonClick() {
  clearContainerResponse();
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `${creatUrl()}`);
    xhr.responseType = 'json';
  xhr.send();
  showPreloader();
  xhr.onload = function() {
    if ( xhr.status !== 200 ) {
      deletePreloader();
      showError(xhr, 'XMLHttp');
    } else {
    deletePreloader();
    console.dir(xhr.response);
    
    createListResult(xhr.response);
    }
    xhr.onerror = function() { 
      alert(`Ошибка соединения`);
    };
  }
}

function handlerDeleteXmlHttpButtonClick() {
  clearContainerResponse();
  const xhr = new XMLHttpRequest();
  xhr.open('DELETE', `${creatUrl()}`);
  xhr.responseType = 'json';
  showPreloader();
  xhr.onload = function() {
    if ( xhr.status !== 200 ) {
      showError(xhr, 'XMLHttp');
      deletePreloader();
    }
    else {
    deletePreloader();
    const container = document.querySelector('.containerResponse');
    container.innerHTML = `${creatUrl()} was successfully deleted!`
    }
  }
  xhr.onerror = function() { 
    alert(`Произошла ошибка во время отправки: ${xhr.status}`);
  }
  xhr.send(null);
}

function handlerPostXmlHttpButtonClick() {
  clearContainerResponse();
  const textareaPost = document.querySelector('#textareaPost');
  console.dir(textareaPost);
  const xhr = new XMLHttpRequest();
  xhr.open('POST', `${creatUrl()}`);
  xhr.responseType = 'json';
  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  xhr.send(textareaPost.value);
  showPreloader();
  xhr.onloadend = function() {
  if ( xhr.status !== 201 ) {
      showError(xhr, 'XMLHttp');
      deletePreloader();
    } else {
    deletePreloader();
    createListResult(xhr.response);
    }
    xhr.onerror = function() { 
      alert(`Ошибка соединения`);
    };
  }
}

function showError(error) {
  const errorMessage = document.createElement('div');
  errorMessage.className = 'error';
  errorMessage.textContent = `Ошибка ${error.status}`;
  const container = document.querySelector('.containerResponse');
  container.append(errorMessage);
}
 
function createListResult(result) {
  function createRows(item) {
    for (const key in item) {
      if (!item.hasOwnProperty(key)) continue;
      if (typeof item[key] === 'object') {
        innerTable += `<td>${Object.values(item[key]).join(`\n`)}</td>`;
      } else innerTable += `<td>${item[key]}</td>`;
    }
    innerTable += '</tr>';
  }
    function createHeadTable(result) {
      for (const key in result) {
        if (result.hasOwnProperty(key)) headTable += `<th>${key}</th>`;
      }
      headTable += '</tr>';
    }
    const container = document.querySelector('.containerResponse');
    container.innerHTML = '';
    if ( !result || result.lenght === 0 ) return;
    const resultTable = document.createElement('table');
    resultTable.className = 'resultTable';
     let headTable = '<tr>';
    let innerTable = '<tr>';
    if ( Array.isArray(result) ) { 
      createHeadTable(result[0])
      result.forEach( item => createRows(item) );
    } else {
      createHeadTable(result);
      createRows(result);
    }
    resultTable.insertAdjacentHTML('beforeend', `${headTable + innerTable}`);
    container.append(resultTable);
  }
  
