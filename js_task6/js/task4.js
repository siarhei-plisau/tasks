// -------------task 4----------------
function getRandomIntegerNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
  
function getRandomHexColor() {
  return '#' + getRandomIntegerNumber(0, 255).toString(16) + getRandomIntegerNumber(0, 255).toString(16) + getRandomIntegerNumber(0, 255).toString(16);
}
  
function getValueFromInput() {
  return parseInt( document.querySelector('.inputNumberDiv').value );
}
function setStyleElement(element, widthContainer, heightContainer) {
  element.style.backgroundColor = getRandomHexColor();
  element.style.width = getRandomIntegerNumber(20, 100) + 'px';
  element.style.height = getRandomIntegerNumber(20, 100) + 'px';
  element.style.color = getRandomHexColor();
  element.style.borderRadius = getRandomIntegerNumber(0, 50) + '%';
  element.style.boxSizing = 'border-box';
  element.style.borderStyle = 'solid';
  element.style.borderColor = getRandomHexColor();
  element.style.borderWidth = getRandomIntegerNumber(1, 20) + 'px';
  element.style.position = 'absolute';
  element.style.left = getRandomIntegerNumber(0, widthContainer - parseInt(element.style.width)) + 'px';
  element.style.top = getRandomIntegerNumber(0, heightContainer - parseInt(element.style.height)) + 'px';
  element.style.lineHeight = parseInt(element.style.height)  - parseInt(element.style.borderWidth)*2 + 'px';
  return element;
}

function creatRandomDiv() {
  let container = document.querySelector('.container');
  let widthContainer = container.offsetWidth;
  let heightContainer = container.offsetHeight;
  let div = document.createElement('div');

  if ( !getValueFromInput() ) {
    document.querySelector('.inputNumberDiv').value = '';
    document.querySelector('.inputNumberDiv').placeholder = 'Enter correct number!';
  }
  const quantityOfElement = getValueFromInput();

  for (let i = 0; i < quantityOfElement; i++) {
    let div = document.createElement('div');
    div.innerHTML = '<strong>div</strong>'; 
    container.append(setStyleElement(div, widthContainer, heightContainer));
      
  }
}